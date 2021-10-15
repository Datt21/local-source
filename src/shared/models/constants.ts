export class Constants {
  public static PAGESIZES: number[] = [20, 50, 100];
  public static PAGESIZE_DEFAULT = Constants.PAGESIZES[0];
  public static IMAGE_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  public static FORMAT_MONTH = 'YYYY/MM';
  public static FORMAT_DATE = 'YYYY/MM/DD';
  public static FORMAT_DATE_TIME = 'yyyy/MM/dd HH:mm';

  public static BG_DATE_PICKER_CONFIG = {
    containerClass: 'theme-dark-blue',
    dateInputFormat: 'YYYY/MM/DD',
    locale: 'ja',
    showWeekNumbers: false,
    autoApply: true,
    firstCalendarDay: 1,
  };

  public static CODE = {
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    BAD_REQUEST: 400,
    OLD_PASSWORD_IS_CORRECT: 'OLD_PASSWORD_IS_CORRECT',
  };

  public static LIST_ROLE = ['管理者', '担当者'];
}
