const WHATSAPP_NUMBER = '919765802900';

/**
 * Generates a formatted, encoded WhatsApp contact URL.
 * Number format: country code + number (no spaces, dashes, or + symbols).
 */
export function getWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

// Reusable prefilled messages
export const WHATSAPP_MESSAGES = {
  general: 'Hello Shree Umiya Construction, I am interested in your construction services. Please share more details.',
  rcc: 'Hello Shree Umiya Construction, I am interested in your Structural RCC Framing services. Please share more details.',
  earthworks: 'Hello Shree Umiya Construction, I am interested in your Earthworks & Foundation Prep services. Please share more details.',
  masonry: 'Hello Shree Umiya Construction, I am interested in your Structural Masonry services. Please share more details.',
  technical: 'Hello Shree Umiya Construction, I would like to request a technical structural datasheet consultation. Please share details.',
  siteVisit: 'Hello Shree Umiya Construction, I would like to request a site visit check at my location. Please contact me.',
};
