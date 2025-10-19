import {
  CalendarDays,
  Code2,
  FileDown,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter
} from 'lucide-react';

export const ICON_MAP = {
  Github,
  Linkedin,
  Twitter,
  Code2,
  Mail,
  Globe,
  FileDown,
  MapPin,
  Phone,
  Send,
  CalendarDays
};

export function getIconComponent(name) {
  return ICON_MAP[name] || Globe;
}
