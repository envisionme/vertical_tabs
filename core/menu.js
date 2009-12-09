// $Id$

Drupal.verticalTabs = Drupal.verticalTabs || {};

Drupal.verticalTabs.menu = function() {
  if ($('#edit-menu-link-title').val()) {
    return $('#edit-menu-link-title').val();
  }
  else {
    return Drupal.t('Not in menu');
  }
}
