// Alluvium — Date Dimension (Power Query M)
// Drop into a blank query. Set StartYear / EndYear / fiscal start / week start below.
// Reverse-sort columns: use as Sort By Column on the matching label (e.g. Month Name → Month Reverse Sort).
let
    // --- config ---
    Today = Date.From(DateTime.LocalNow()),
    StartYear = 2026,
    EndYear = 2030,
    FiscalYearStartMonth = 1,          // 1 = Jan, 7 = Jul, etc.
    FirstDayOfWeek = Day.Monday,       // Day.Monday | Day.Sunday | …
    DefaultSortAscending = true,       // false = table rows newest → oldest
    // --- range ---
    StartDate = #date(StartYear, 1, 1),
    EndDate = #date(EndYear, 12, 31),
    DayCount = Duration.Days(EndDate - StartDate) + 1,
    DateList = List.Dates(StartDate, DayCount, #duration(1, 0, 0, 0)),
    Base = Table.TransformColumnTypes(
        Table.FromList(DateList, Splitter.SplitByNothing(), {"Date"}),
        {{"Date", type date}}
    ),
    WithDateKey = Table.AddColumn(
        Base,
        "DateKey",
        each Date.Year([Date]) * 10000 + Date.Month([Date]) * 100 + Date.Day([Date]),
        Int64.Type
    ),
    // --- calendar ---
    WithYear = Table.AddColumn(WithDateKey, "Year", each Date.Year([Date]), Int64.Type),
    WithYearStart = Table.AddColumn(WithYear, "Start of Year", each Date.StartOfYear([Date]), type date),
    WithYearEnd = Table.AddColumn(WithYearStart, "End of Year", each Date.EndOfYear([Date]), type date),
    WithMonth = Table.AddColumn(WithYearEnd, "Month", each Date.Month([Date]), Int64.Type),
    WithMonthStart = Table.AddColumn(WithMonth, "Start of Month", each Date.StartOfMonth([Date]), type date),
    WithMonthEnd = Table.AddColumn(WithMonthStart, "End of Month", each Date.EndOfMonth([Date]), type date),
    WithDaysInMonth = Table.AddColumn(WithMonthEnd, "Days in Month", each Date.DaysInMonth([Date]), Int64.Type),
    WithDay = Table.AddColumn(WithDaysInMonth, "Day", each Date.Day([Date]), Int64.Type),
    WithDayName = Table.AddColumn(WithDay, "Day Name", each Date.DayOfWeekName([Date]), type text),
    WithDayOfWeek = Table.AddColumn(WithDayName, "Day of Week", each Date.DayOfWeek([Date], FirstDayOfWeek), Int64.Type),
    WithDayOfYear = Table.AddColumn(WithDayOfWeek, "Day of Year", each Date.DayOfYear([Date]), Int64.Type),
    WithMonthName = Table.AddColumn(WithDayOfYear, "Month Name", each Date.MonthName([Date]), type text),
    WithQuarter = Table.AddColumn(WithMonthName, "Quarter", each Date.QuarterOfYear([Date]), Int64.Type),
    WithQuarterStart = Table.AddColumn(WithQuarter, "Start of Quarter", each Date.StartOfQuarter([Date]), type date),
    WithQuarterEnd = Table.AddColumn(WithQuarterStart, "End of Quarter", each Date.EndOfQuarter([Date]), type date),
    WithWeekOfYear = Table.AddColumn(WithQuarterEnd, "Week of Year", each Date.WeekOfYear([Date], FirstDayOfWeek), Int64.Type),
    WithWeekOfMonth = Table.AddColumn(WithWeekOfYear, "Week of Month", each Date.WeekOfMonth([Date], FirstDayOfWeek), Int64.Type),
    WithWeekStart = Table.AddColumn(WithWeekOfMonth, "Start of Week", each Date.StartOfWeek([Date], FirstDayOfWeek), type date),
    WithWeekEnd = Table.AddColumn(WithWeekStart, "End of Week", each Date.EndOfWeek([Date], FirstDayOfWeek), type date),
    // --- fiscal ---
    FiscalShift = let
        raw = 13 - FiscalYearStartMonth,
        capped = if raw >= 12 or raw < 0 then 0 else raw
    in
        capped,
    WithFiscalBase = Table.TransformColumnTypes(
        Table.AddColumn(WithWeekEnd, "FiscalBaseDate", each Date.AddMonths([Date], FiscalShift), type date),
        {{"FiscalBaseDate", type date}}
    ),
    WithFiscalYear = Table.AddColumn(WithFiscalBase, "Fiscal Year", each Date.Year([FiscalBaseDate]), Int64.Type),
    WithFiscalQuarter = Table.AddColumn(WithFiscalYear, "Fiscal Quarter", each Date.QuarterOfYear([FiscalBaseDate]), Int64.Type),
    WithFiscalMonth = Table.AddColumn(WithFiscalQuarter, "Fiscal Month", each Date.Month([FiscalBaseDate]), Int64.Type),
    DropFiscalBase = Table.RemoveColumns(WithFiscalMonth, {"FiscalBaseDate"}),
    // --- offsets vs Today ---
    WithDayOffset = Table.TransformColumnTypes(
        Table.AddColumn(DropFiscalBase, "Day Offset", each Duration.Days([Date] - Today), Int64.Type),
        {{"Day Offset", Int64.Type}}
    ),
    WithWeekOffset = Table.TransformColumnTypes(
        Table.AddColumn(
            WithDayOffset,
            "Week Offset",
            each
                let
                    thisStart = Date.StartOfWeek([Date], FirstDayOfWeek),
                    todayStart = Date.StartOfWeek(Today, FirstDayOfWeek)
                in
                    Number.IntegerDivide(Duration.Days(thisStart - todayStart), 7),
            Int64.Type
        ),
        {{"Week Offset", Int64.Type}}
    ),
    WithMonthOffset = Table.TransformColumnTypes(
        Table.AddColumn(
            WithWeekOffset,
            "Month Offset",
            each ([Year] - Date.Year(Today)) * 12 + ([Month] - Date.Month(Today)),
            Int64.Type
        ),
        {{"Month Offset", Int64.Type}}
    ),
    WithQuarterOffset = Table.TransformColumnTypes(
        Table.AddColumn(
            WithMonthOffset,
            "Quarter Offset",
            each ([Year] - Date.Year(Today)) * 4 + ([Quarter] - Date.QuarterOfYear(Today)),
            Int64.Type
        ),
        {{"Quarter Offset", Int64.Type}}
    ),
    WithYearOffset = Table.TransformColumnTypes(
        Table.AddColumn(WithQuarterOffset, "Year Offset", each [Year] - Date.Year(Today), Int64.Type),
        {{"Year Offset", Int64.Type}}
    ),
    // --- labels ---
    WithYearMonth = Table.AddColumn(WithYearOffset, "Year-Month", each Date.ToText([Date], "MMM yyyy"), type text),
    WithYearMonthCode = Table.TransformColumnTypes(
        Table.AddColumn(WithYearMonth, "Year-Month Code", each [Year] * 100 + [Month], Int64.Type),
        {{"Year-Month Code", Int64.Type}}
    ),
    WithYearQuarter = Table.AddColumn(
        WithYearMonthCode,
        "Year-Quarter",
        each Text.From([Year]) & " Q" & Text.From([Quarter]),
        type text
    ),
    // --- reverse-sort keys ---
    WithRevDate = Table.TransformColumnTypes(
        Table.AddColumn(WithYearQuarter, "Date Reverse Sort", each Number.From(EndDate) - Number.From([Date]), Int64.Type),
        {{"Date Reverse Sort", Int64.Type}}
    ),
    WithRevYear = Table.TransformColumnTypes(
        Table.AddColumn(WithRevDate, "Year Reverse Sort", each EndYear - [Year], Int64.Type),
        {{"Year Reverse Sort", Int64.Type}}
    ),
    WithRevMonth = Table.TransformColumnTypes(
        Table.AddColumn(WithRevYear, "Month Reverse Sort", each 13 - [Month], Int64.Type),
        {{"Month Reverse Sort", Int64.Type}}
    ),
    WithRevQuarter = Table.TransformColumnTypes(
        Table.AddColumn(WithRevMonth, "Quarter Reverse Sort", each 5 - [Quarter], Int64.Type),
        {{"Quarter Reverse Sort", Int64.Type}}
    ),
    WithRevWeek = Table.TransformColumnTypes(
        Table.AddColumn(WithRevQuarter, "Week of Year Reverse Sort", each 54 - [#"Week of Year"], Int64.Type),
        {{"Week of Year Reverse Sort", Int64.Type}}
    ),
    WithRevDayOfWeek = Table.TransformColumnTypes(
        Table.AddColumn(WithRevWeek, "Day of Week Reverse Sort", each 7 - [#"Day of Week"], Int64.Type),
        {{"Day of Week Reverse Sort", Int64.Type}}
    ),
    WithRevYearMonth = Table.TransformColumnTypes(
        Table.AddColumn(WithRevDayOfWeek, "Year-Month Reverse Sort", each (EndYear * 100 + 12) - [#"Year-Month Code"], Int64.Type),
        {{"Year-Month Reverse Sort", Int64.Type}}
    ),
    Sorted = Table.Sort(
        WithRevYearMonth,
        {{"Date", if DefaultSortAscending then Order.Ascending else Order.Descending}}
    )
in
    Sorted
