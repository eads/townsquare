(function($) {

Drupal.behaviors.volunteerGrowTextarea = {
  attach: function(context) {
    $('.field-name-field-session-notes textarea', context).elastic();
    $('.field-name-field-event-description textarea', context).elastic();
  }
};
Drupal.behaviors.volunteerExtendPage = {
  attach: function(context) {
    var adjusted = $('#volunteer-sessions').data('heightAdjusted');
    if (!adjusted) {
      $('#volunteer-sessions')
        .css('padding-bottom', $('#main-content').height())
        .data('heightAdjusted', true);
    }
  }
};
Drupal.behaviors.prepareVolunteerUI = {
  attach: function(context) {
    $('#volunteer-sessions input[value="Save"]').hide();
  }
};
Drupal.behaviors.toggleFields = {
  attach: function(context) {
    $('.field-name-field-session-user input', context).each(function() {
      var form = $(this).parents('form');
      if (!this.value) {
        $('input[name!="field_session_user[und][0][target_id]"], select, textarea', form)
          .not(':checkbox')
          .attr('readonly', true);
        
        $('input:checkbox, button', form)
          .attr('disabled', true);
      }
      $(this).change(function() {
        $('input, select, textarea', form)
        .not('name="field_session_user[und][0][target_id]"')
        .not(':checkbox')
        .removeAttr('readonly');
        $('input:checkbox, button', form)
          .removeAttr('disabled');
      });
    });
  }
};


})(jQuery);
