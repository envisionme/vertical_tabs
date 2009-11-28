// $Id$

Drupal.verticalTabs = Drupal.verticalTabs || {};


Drupal.verticalTabs.comment = function() {
  var vals = [];
  vals.push($(".vertical-tabs-comment input[name='comment']:checked").parent().text());
  vals.push($(".vertical-tabs-comment input[name='comment_default_mode']:checked").parent().text());
  vals.push(Drupal.t('@number comments per page', {'@number': $(".vertical-tabs-comment select[name='comment_default_per_page'] option:selected").val()}));
  return vals.join(', ');
}

Drupal.verticalTabs.submission = function() {
  var vals = [];
  vals.push(Drupal.checkPlain($('.vertical-tabs-submission #edit-title-label').val()) || Drupal.t('Requires a title'));
  vals.push(Drupal.checkPlain($('.vertical-tabs-submission #edit-body-label').val()) || Drupal.t('No body'));
  return vals.join(', ');
}

Drupal.verticalTabs.workflow = function() {
  var vals = [];
  $(".vertical-tabs-workflow input[name^='node_options']:checked").parent().each(function() {
    vals.push(Drupal.checkPlain($(this).text()));
  });
  if (!$('.vertical-tabs-workflow #edit-node-options-status').is(':checked')) {
    vals.unshift(Drupal.t('Not published'));
  }
  return vals.join(', ');
}
