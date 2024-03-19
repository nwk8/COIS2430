/**
 * This function checks that an email address is valid.
 *
 * This function is correct, don't mess with it. Right now, it's written pretty verbosely to make
 * what's happening clearer. In reality, I would have written this functions as:
 *
 * ```js
 * const checkEmail = str => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
 * ```
 *
 * It uses a regular expression, like we've discussed in workshop.
 * @see https://regex101.com/r/5w9EYJ/1
 */
function checkEmail(string) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(string)) return true;
  else return false;
}

// ---------------------------------------------------------------------------------------------- //
// Start below this line
// ---------------------------------------------------------------------------------------------- //

//########################################
// Select elements
//########################################

//###############################################
// Validate email on leaving textbox
//###############################################

//###############################################
// Indicate password strength with each
// character add/removed from password field
//##############################################

//###############################################
// Count and limit the text area for each edit
//##############################################

//###############################################
// On submission of form, validate checkbox
// is checked, prevent submission on error
//##############################################
