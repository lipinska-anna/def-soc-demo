export interface EmailSecurity {
  spoofable: string;
  dmarc_policy: string;
  blacklist_detections: number;
  blacklist_total_list: number;
  blacklist_detected_list: string[];
}