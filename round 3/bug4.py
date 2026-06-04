def generate_summary(records):
    total_hours = 0
    late_days = 0
#bug a fix: initialize total_hours and late_days to 0
    for record in records:
        total_hours += record["hours"]

        if record["is_late"]:
            late_days += 1
            #bug b divide by zero error fix

    avg_hours = total_hours / len(records) if records else 0

    return {
        "total_hours": round(total_hours, 2),
        "avg_hours": round(avg_hours, 2),
        "late_days": late_days,
        "days_present": len(records)
    }