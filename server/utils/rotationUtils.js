/**
 * Rotation Utilities
 * Handles rotation of SMTP configurations and templates
 */

/**
 * Gets the current SMTP configuration based on email count
 * Rotates SMTP configs every 100 emails
 * @param {Array} smtpConfigs - Array of SMTP configurations
 * @param {number} emailCount - Current email count
 * @returns {Object} - Current SMTP configuration
 */
export const getCurrentSmtpConfig = (smtpConfigs, emailCount) => {
  if (!smtpConfigs || !Array.isArray(smtpConfigs) || smtpConfigs.length === 0) {
    throw new Error('No SMTP configurations available');
  }

  // Rotate SMTP configuration every 100 emails
  const index = Math.floor(emailCount / 100) % smtpConfigs.length;
  return smtpConfigs[index];
};

/**
 * Gets the current template based on email count
 * Rotates templates for each recipient
 * @param {Array} templates - Array of email templates
 * @param {number} emailCount - Current email count
 * @returns {string} - Current template
 */
export const getCurrentTemplate = (templates, emailCount) => {
  if (!templates || !Array.isArray(templates) || templates.length === 0) {
    throw new Error('No templates available');
  }

  // Rotate template for each recipient
  const index = emailCount % templates.length;
  return templates[index];
};

/**
 * Rotates SMTP configurations based on a custom strategy
 * @param {Array} configs - Array of SMTP configurations
 * @param {number} currentIndex - Current index
 * @param {number} interval - Rotation interval
 * @returns {Array} - Array containing the next SMTP configuration
 */
export const rotateSmtp = (configs, currentIndex = 0, interval = 100) => {
  if (!configs || !Array.isArray(configs) || configs.length === 0) {
    throw new Error('No SMTP configurations available');
  }

  const nextIndex = Math.floor(currentIndex / interval) % configs.length;
  return [configs[nextIndex]];
};