module.exports = class CsvVOClass {
  rb_customer_id;
  store_name;
  rb_id;
  rb_status_label;
  rb_status_code;
  rb_system_code;
  has_reserved;
  recived_reserve_date;
  comming_date;
  comming_time;
  number_of_people;
  number_of_child;
  outer_site_code;
  store_id;
  affiliate_id;
  outer_mumber_id;
  updated_at;
  inflow_id;
  inflow_name;
  outer_rb_id;

  /**
   *
   * @param [] args
   */
  constructor(args) {
    this.rb_customer_id = args[0];
    this.store_name = args[1];
    this.rb_id = args[2];
    this.rb_status_label = args[3];
    this.rb_status_code = args[4];
    this.rb_system_code = args[5];
    this.has_reserved = args[6];
    this.recived_reserve_date = args[7];
    this.comming_date = args[8];
    this.comming_time = args[9];
    this.number_of_people = args[10];
    this.number_of_child = args[11];
    this.outer_site_code = args[12];
    this.store_id = args[13];
    this.affiliate_id = args[14];
    this.outer_member_site = args[15];
    this.outer_member_id = args[16];
    this.updated_at = args[17];
    this.common_inflow_id = args[18];
    this.common_inflow_name = args[19];
    this.outer_member_rb_id = args[20];
  }
};
