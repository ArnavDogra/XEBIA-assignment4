MIN_DAYS_REQUIRED = 20
MAX_LATE_DAYS = 3

def check_attendance_policy(summary):
    days_present = summary["days_present"]
    late_days = summary["late_days"]

    # Bug A Fix:
    # Flag employees who attended fewer than the minimum required days.
    below_minimum = days_present < MIN_DAYS_REQUIRED

    # Bug B Fix:
    # HR policy states that 3 or more late check-ins should trigger a warning.
    exceeded_late = late_days >= MAX_LATE_DAYS

    if below_minimum or exceeded_late:
        return {
            "warning": True,
            "reason": []
                + (["Below minimum attendance"] if below_minimum else [])
                + (["Exceeded late check-ins"] if exceeded_late else [])
        }

    return {"warning": False, "reason": []}