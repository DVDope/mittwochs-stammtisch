import datetime as dt


def check_if_date_is_okay():
    today = dt.date.today()

    month_before_bpt = dt.date(year=2024, month=5, day=21)

    if today < month_before_bpt:
        return "Du kleiner Wichser. So blöd bin ich nicht..."

    return 0
