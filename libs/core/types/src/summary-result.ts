import { PortDetails } from './port-details';
import { EmailSecurity } from './email-security';
import { DataLeakDetails } from './dataleak-details';
import { AssetDetails } from './asset-details';
import { VulnerabilityDetails } from './vulnerability-details';

export interface SummaryResult {
  idsummary: string;
  summary_text: string;
  summary_text_en: string;
  risk_score: string;
  creation_date: string;
  last_edit: string;
  domain_name: string;
  servizi_esposti_score: number;
  dataleak_score: number;
  rapporto_leak_email_score: number;
  spoofing_score: number;
  open_ports_score: number;
  blacklist_score: number;
  vulnerability_score_active: number;
  vulnerability_score_passive: number;
  certificate_score: number;
  n_port: PortDetails;
  n_cert_attivi: number;
  n_cert_scaduti: number;
  n_asset: number;
  n_similar_domains: number;
  email_security: EmailSecurity;
  n_dataleak: DataLeakDetails;
  n_vulns: VulnerabilityDetails;
  waf: AssetDetails;
  cdn: AssetDetails;
  unique_ipv4: number;
  unique_ipv6: number;
}