var natural = require('natural');
var BrainJSClassifier = require('natural-brain');

//Set up classifiers
var teamClassifier = new natural.LogisticRegressionClassifier();
//var teamClassifier = new BrainJSClassifier();

/*----------------------------*/

//Team classifications

//Admin Users
teamClassifier.addDocument('admin', 'team__adminusers');
teamClassifier.addDocument('admins', 'team__adminusers');
teamClassifier.addDocument('admin user', 'team__adminusers');
teamClassifier.addDocument('admin group', 'team__adminusers');
teamClassifier.addDocument('admin groups', 'team__adminusers');
teamClassifier.addDocument('administrator', 'team__adminusers');
teamClassifier.addDocument('administrator', 'team__adminusers');
teamClassifier.addDocument('content manager', 'team__adminusers');
teamClassifier.addDocument('permissions', 'team__adminusers');
teamClassifier.addDocument('access', 'team__adminusers');
teamClassifier.addDocument('rights to edit', 'team__adminusers');
teamClassifier.addDocument('Could not connect to Composer', 'team__adminusers');
teamClassifier.addDocument('grant access', 'team__adminusers');
//teamClassifier.addDocument('An email address does not exist for your Constituent profile', 'team__adminusers');

//Alerts
teamClassifier.addDocument('alert', 'team__alerts');
teamClassifier.addDocument('alert', 'team__alerts');
teamClassifier.addDocument('alert subscriptions', 'team__alerts');
teamClassifier.addDocument('alerts', 'team__alerts');
teamClassifier.addDocument('alerts', 'team__alerts');
teamClassifier.addDocument('alerts', 'team__alerts');
teamClassifier.addDocument('sms', 'team__alerts');
teamClassifier.addDocument('subscription', 'team__alerts');
teamClassifier.addDocument('text-enabled phone', 'team__alerts');
teamClassifier.addDocument('text message', 'team__alerts');
teamClassifier.addDocument('text messages', 'team__alerts');

//API
teamClassifier.addDocument('API', 'team__api');

//Apply
teamClassifier.addDocument('apply', 'team__apply');
teamClassifier.addDocument('finalsiteapply', 'team__apply');
teamClassifier.addDocument('Finalsite Apply', 'team__apply');
teamClassifier.addDocument('Finalsite Apply', 'team__apply');
teamClassifier.addDocument('Finalsite Apply', 'team__apply');
teamClassifier.addDocument('Finalsite Apply', 'team__apply');
teamClassifier.addDocument('finalsiteapply.com', 'team__apply');
teamClassifier.addDocument('applicant', 'team__apply');

//Athletics
teamClassifier.addDocument('athletic', 'team__athletics');
teamClassifier.addDocument('athletics', 'team__athletics');
teamClassifier.addDocument('Athletics Manager', 'team__athletics');
teamClassifier.addDocument('athletic events', 'team__athletics');
teamClassifier.addDocument('sport', 'team__athletics');
teamClassifier.addDocument('team', 'team__athletics');
teamClassifier.addDocument('game', 'team__athletics');
teamClassifier.addDocument('coach', 'team__athletics');
teamClassifier.addDocument('roster', 'team__athletics');
teamClassifier.addDocument('lacrosse', 'team__athletics');
teamClassifier.addDocument('baseball', 'team__athletics');
teamClassifier.addDocument('basketball', 'team__athletics');
teamClassifier.addDocument('hockey', 'team__athletics');
teamClassifier.addDocument('varsity', 'team__athletics');

//Banners/Layouts
teamClassifier.addDocument('navigation', 'team__banners_layouts');
teamClassifier.addDocument('banner', 'team__banners_layouts');
teamClassifier.addDocument('footer', 'team__banners_layouts');
teamClassifier.addDocument('footer', 'team__banners_layouts');
teamClassifier.addDocument('default banner', 'team__banners_layouts');

//Blogs/Forums
teamClassifier.addDocument('blog', 'team__blogs_forums');
teamClassifier.addDocument('blog', 'team__blogs_forums');
teamClassifier.addDocument('blogs', 'team__blogs_forums');
teamClassifier.addDocument('blogs', 'team__blogs_forums');

//Calendars
teamClassifier.addDocument('calendar', 'team__calendars');
teamClassifier.addDocument('calendar', 'team__calendars');
teamClassifier.addDocument('Calendar Mgr', 'team__calendars');
teamClassifier.addDocument('calendars', 'team__calendars');
teamClassifier.addDocument('Calendar Manager', 'team__calendars');
teamClassifier.addDocument('Google Calendar', 'team__calendars');
teamClassifier.addDocument('ical', 'team__calendars');
teamClassifier.addDocument('event', 'team__calendars');

//Classes/Group Spaces
teamClassifier.addDocument('LMS', 'team__classes_group_spaces');
teamClassifier.addDocument('LMS', 'team__classes_group_spaces');
teamClassifier.addDocument('LMS Dashboard', 'team__classes_group_spaces');
teamClassifier.addDocument('group space', 'team__classes_group_spaces');
teamClassifier.addDocument('group space', 'team__classes_group_spaces');
teamClassifier.addDocument('group spaces', 'team__classes_group_spaces');
teamClassifier.addDocument('group spaces', 'team__classes_group_spaces');
teamClassifier.addDocument('groupspace', 'team__classes_group_spaces');
teamClassifier.addDocument('groupspace', 'team__classes_group_spaces');
teamClassifier.addDocument('class pages', 'team__classes_group_spaces');
teamClassifier.addDocument('classes', 'team__classes_group_spaces');
teamClassifier.addDocument('class portal', 'team__classes_group_spaces');
teamClassifier.addDocument('bulletin', 'team__classes_group_spaces');
teamClassifier.addDocument('resources', 'team__classes_group_spaces');
teamClassifier.addDocument('homework', 'team__classes_group_spaces');
teamClassifier.addDocument('Groups Dashboard', 'team__classes_group_spaces');
//teamClassifier.addDocument('bulk email in group', 'team__classes_group_spaces');

//Commerce
teamClassifier.addDocument('commerce', 'team__commerce');
teamClassifier.addDocument('ecommerce', 'team__commerce');
teamClassifier.addDocument('school store', 'team__commerce');
teamClassifier.addDocument('online store', 'team__commerce');
teamClassifier.addDocument('sales tax', 'team__commerce');


//Composer
teamClassifier.addDocument('Composer', 'team__composer');
teamClassifier.addDocument('Composer', 'team__composer');
teamClassifier.addDocument('linked page', 'team__composer');
teamClassifier.addDocument('custom URL', 'team__composer');
teamClassifier.addDocument('/fs/admin/', 'team__composer');
teamClassifier.addDocument('clone page', 'team__composer');
teamClassifier.addDocument('landing page', 'team__composer');
teamClassifier.addDocument('landing page', 'team__composer');
teamClassifier.addDocument('redirect', 'team__composer');
teamClassifier.addDocument('redirect', 'team__composer');
teamClassifier.addDocument('redirects', 'team__composer');
teamClassifier.addDocument('redirects', 'team__composer');
teamClassifier.addDocument('translate button', 'team__composer');
teamClassifier.addDocument('admin.cfm?tab=6', 'team__composer');
teamClassifier.addDocument('SSL', 'team__composer');
teamClassifier.addDocument('page', 'team__composer');
teamClassifier.addDocument('pages', 'team__composer');
teamClassifier.addDocument('element', 'team__composer');
teamClassifier.addDocument('not secure', 'team__composer');
teamClassifier.addDocument('Access Control', 'team__composer');
teamClassifier.addDocument('SSL', 'team__composer');
teamClassifier.addDocument('interior page', 'team__composer');
teamClassifier.addDocument('meta tag', 'team__composer');
teamClassifier.addDocument('meta tag', 'team__composer');
teamClassifier.addDocument('microsite', 'team__composer');


//Constituents
teamClassifier.addDocument('constituent', 'team__constituents');
teamClassifier.addDocument('Constituent Manager', 'team__constituents');
teamClassifier.addDocument('faculty/staff', 'team__constituents');
teamClassifier.addDocument('role', 'team__constituents');
teamClassifier.addDocument('parent', 'team__constituents');
teamClassifier.addDocument('alumni', 'team__constituents');
teamClassifier.addDocument('alumna', 'team__constituents');
teamClassifier.addDocument('alumnus', 'team__constituents');
teamClassifier.addDocument('alumnae', 'team__constituents');
teamClassifier.addDocument('trustee', 'team__constituents');
teamClassifier.addDocument('directory', 'team__constituents');
teamClassifier.addDocument('username', 'team__constituents');
teamClassifier.addDocument('profile', 'team__constituents');
teamClassifier.addDocument('portal account', 'team__constituents');
teamClassifier.addDocument('home address', 'team__constituents');
teamClassifier.addDocument('profile field', 'team__constituents');
teamClassifier.addDocument('deceased', 'team__constituents');
teamClassifier.addDocument('password requirements', 'team__constituents');
teamClassifier.addDocument('import ID', 'team__constituents');
teamClassifier.addDocument('new role', 'team__constituents');
teamClassifier.addDocument('new roles', 'team__constituents');
teamClassifier.addDocument('household', 'team__constituents');

//Crisis Mode
teamClassifier.addDocument('crisis mode', 'team__crisis_mode');

//Data Cleanup
teamClassifier.addDocument('delete archived pages', 'team__data_cleanup');
teamClassifier.addDocument('duplicate accounts', 'team__data_cleanup');
teamClassifier.addDocument('duplicate record', 'team__data_cleanup');
teamClassifier.addDocument('incorrect accounts', 'team__data_cleanup');
teamClassifier.addDocument('duplicate', 'team__data_cleanup');
teamClassifier.addDocument('two entries', 'team__data_cleanup');
teamClassifier.addDocument('merge', 'team__data_cleanup');
teamClassifier.addDocument('merge', 'team__data_cleanup');
teamClassifier.addDocument('merge', 'team__data_cleanup');
teamClassifier.addDocument('merge', 'team__data_cleanup');
teamClassifier.addDocument('merge', 'team__data_cleanup');
teamClassifier.addDocument('merge', 'team__data_cleanup');
teamClassifier.addDocument('merge', 'team__data_cleanup');
teamClassifier.addDocument('dupe', 'team__data_cleanup');
teamClassifier.addDocument('DUPE', 'team__data_cleanup');
teamClassifier.addDocument('delete users', 'team__data_cleanup');
teamClassifier.addDocument('not in our database anymore', 'team__data_cleanup');
teamClassifier.addDocument('bulk update', 'team__data_cleanup');
teamClassifier.addDocument('forward slash', 'team__data_cleanup');

//Data Exports
teamClassifier.addDocument('export', 'team__data_exports');
teamClassifier.addDocument('data export', 'team__data_exports');
teamClassifier.addDocument('get us a list', 'team__data_exports');


//Data Restores
teamClassifier.addDocument('restore', 'team__data_restores');
teamClassifier.addDocument('restored', 'team__data_restores');
teamClassifier.addDocument('restored from', 'team__data_restores');
teamClassifier.addDocument('deleted', 'team__data_restores');
teamClassifier.addDocument('revert', 'team__data_restores');
teamClassifier.addDocument('previous backup', 'team__data_restores');
teamClassifier.addDocument('backup', 'team__data_restores');
teamClassifier.addDocument('back in time', 'team__data_restores');
teamClassifier.addDocument('page restore', 'team__data_restores');
teamClassifier.addDocument('page restored', 'team__data_restores');


//Data Uploads
teamClassifier.addDocument('upload', 'team__data_uploads');
teamClassifier.addDocument('data upload', 'team__data_uploads');
teamClassifier.addDocument('data upload', 'team__data_uploads');
teamClassifier.addDocument('data upload', 'team__data_uploads');
teamClassifier.addDocument('data upload', 'team__data_uploads');
teamClassifier.addDocument('data upload', 'team__data_uploads');
teamClassifier.addDocument('data upload', 'team__data_uploads');
teamClassifier.addDocument('data import', 'team__data_uploads');
teamClassifier.addDocument('datasheet', 'team__data_uploads');
teamClassifier.addDocument('data sheet', 'team__data_uploads');
teamClassifier.addDocument('bulk data upload', 'team__data_uploads');
teamClassifier.addDocument('attached files', 'team__data_uploads');
teamClassifier.addDocument('attached report', 'team__data_uploads');
teamClassifier.addDocument('individual reports', 'team__data_uploads');
teamClassifier.addDocument('email import', 'team__data_uploads');
teamClassifier.addDocument('fs_faculty.xslx', 'team__data_uploads');


//Design
teamClassifier.addDocument('design', 'team__design');
teamClassifier.addDocument('color', 'team__design');
teamClassifier.addDocument('colors', 'team__design');
teamClassifier.addDocument('link colors', 'team__design');
teamClassifier.addDocument('css files', 'team__design');
teamClassifier.addDocument('custom body class', 'team__design');
teamClassifier.addDocument('style', 'team__design');
teamClassifier.addDocument('style sheet', 'team__design');
teamClassifier.addDocument('style guide', 'team__design');
teamClassifier.addDocument('formatting', 'team__design');
teamClassifier.addDocument('bolder', 'team__design');
teamClassifier.addDocument('ada compliance', 'team__design');
teamClassifier.addDocument('home page image', 'team__design');
teamClassifier.addDocument('images blurry', 'team__design');
teamClassifier.addDocument('javascript code', 'team__design');
teamClassifier.addDocument('hero image', 'team__design');
teamClassifier.addDocument('not displaying', 'team__design');
teamClassifier.addDocument('homepage slider', 'team__design');
teamClassifier.addDocument('accordian', 'team__design');
teamClassifier.addDocument('accordion', 'team__design');
teamClassifier.addDocument('video home page', 'team__design');
teamClassifier.addDocument('transparent', 'team__design');
teamClassifier.addDocument('megamenu', 'team__design');
teamClassifier.addDocument('mega menu', 'team__design');
teamClassifier.addDocument('Chrome', 'team__design');
teamClassifier.addDocument('Firefox', 'team__design');
teamClassifier.addDocument('Internet Explorer', 'team__design');
teamClassifier.addDocument('drop-down menu', 'team__design');
teamClassifier.addDocument('dropdown menu', 'team__design');
teamClassifier.addDocument('drop down menu', 'team__design');
teamClassifier.addDocument('drop down banner', 'team__design');
teamClassifier.addDocument('gif', 'team__design');
teamClassifier.addDocument('animated gif', 'team__design');
teamClassifier.addDocument('animation', 'team__design');
teamClassifier.addDocument('stretched', 'team__design');
teamClassifier.addDocument('warped', 'team__design');
teamClassifier.addDocument('resize', 'team__design');
teamClassifier.addDocument('padding', 'team__design');
teamClassifier.addDocument('column', 'team__design');
teamClassifier.addDocument('background', 'team__design');
teamClassifier.addDocument('unreadable', 'team__design');
teamClassifier.addDocument('readability', 'team__design');
teamClassifier.addDocument('hamburger', 'team__design');
teamClassifier.addDocument('homepage rotation', 'team__design');
teamClassifier.addDocument('homepage photo', 'team__design');
teamClassifier.addDocument('formatting', 'team__design');
teamClassifier.addDocument('logo', 'team__design');
teamClassifier.addDocument('logo', 'team__design');
teamClassifier.addDocument('new logo', 'team__design');
teamClassifier.addDocument('spacing', 'team__design');
teamClassifier.addDocument('icons', 'team__design');
teamClassifier.addDocument('not displaying the way it is supposed to', 'team__design');
teamClassifier.addDocument('centered', 'team__design');
teamClassifier.addDocument('not centered', 'team__design');
teamClassifier.addDocument('header', 'team__design');
teamClassifier.addDocument('wrapping', 'team__design');
teamClassifier.addDocument('responsive', 'team__design');
teamClassifier.addDocument('show up properly', 'team__design');
teamClassifier.addDocument('favicon', 'team__design');
teamClassifier.addDocument('display issues', 'team__design');
teamClassifier.addDocument('display issues', 'team__design');
teamClassifier.addDocument('display issues', 'team__design');
teamClassifier.addDocument('looks normal', 'team__design');
teamClassifier.addDocument('not showing', 'team__design');
teamClassifier.addDocument('do not show up', 'team__design');
teamClassifier.addDocument('accessible', 'team__design');
teamClassifier.addDocument('accessibility', 'team__design');
teamClassifier.addDocument('slideshow', 'team__design');
teamClassifier.addDocument('vertical line', 'team__design');
teamClassifier.addDocument('callout box', 'team__design');
teamClassifier.addDocument('invisible', 'team__design');
teamClassifier.addDocument('infographic', 'team__design');
teamClassifier.addDocument('IE 11', 'team__design');
teamClassifier.addDocument('IE', 'team__design');
teamClassifier.addDocument('dimensions', 'team__design');
teamClassifier.addDocument('sliders', 'team__design');
teamClassifier.addDocument('adding a button', 'team__design');
teamClassifier.addDocument('design code', 'team__design');
teamClassifier.addDocument('font', 'team__design');
teamClassifier.addDocument('fonts', 'team__design');
teamClassifier.addDocument('font size', 'team__design');
teamClassifier.addDocument('font size', 'team__design');
teamClassifier.addDocument('font size', 'team__design');
teamClassifier.addDocument('font size', 'team__design');
teamClassifier.addDocument('alignment', 'team__design');
teamClassifier.addDocument('custom style', 'team__design');
teamClassifier.addDocument('fitting', 'team__design');
teamClassifier.addDocument('doesn\'t fit', 'team__design');
teamClassifier.addDocument('search bar', 'team__design');
teamClassifier.addDocument('on mobile', 'team__design');
teamClassifier.addDocument('on mobile', 'team__design');
teamClassifier.addDocument('cut off', 'team__design');
teamClassifier.addDocument('cut off', 'team__design');
teamClassifier.addDocument('Typekit', 'team__design');
teamClassifier.addDocument('Typekit', 'team__design');
teamClassifier.addDocument('Typekit', 'team__design');



//Design: Digital Signage
teamClassifier.addDocument('digital signage', 'team__design_digital_signage');


//Design enotify
teamClassifier.addDocument('email formatting', 'team__design_enotify');
teamClassifier.addDocument('enotify formatting', 'team__design_enotify');
teamClassifier.addDocument('enotice display', 'team__design_enotify');
teamClassifier.addDocument('enotify template', 'team__design_enotify');
teamClassifier.addDocument('600px width', 'team__design_enotify');
teamClassifier.addDocument('signature', 'team__design_enotify');

//Domain Names
teamClassifier.addDocument('domain name', 'team__domain_names');
teamClassifier.addDocument('domain', 'team__domain_names');
teamClassifier.addDocument('new domain', 'team__domain_names');
teamClassifier.addDocument('separate domain', 'team__domain_names');
teamClassifier.addDocument('dns', 'team__domain_names');
teamClassifier.addDocument('dns settings', 'team__domain_names');
teamClassifier.addDocument('a record', 'team__domain_names');
teamClassifier.addDocument('cname', 'team__domain_names');
teamClassifier.addDocument('subdomain', 'team__domain_names');
teamClassifier.addDocument('sub-domain', 'team__domain_names');
teamClassifier.addDocument('IP address', 'team__domain_names');

//Dropbox
teamClassifier.addDocument('dropbox', 'team__dropbox');
teamClassifier.addDocument('dropbox', 'team__dropbox');
teamClassifier.addDocument('dropbox', 'team__dropbox');


//Email Deliverability
teamClassifier.addDocument('not receiving emails', 'team__email_deliverability');
teamClassifier.addDocument('not getting emails', 'team__email_deliverability');
teamClassifier.addDocument('bad email', 'team__email_deliverability');
teamClassifier.addDocument('did not receive', 'team__email_deliverability');
teamClassifier.addDocument('spam', 'team__email_deliverability');
teamClassifier.addDocument('unsubscribed', 'team__email_deliverability');


//eNotify
teamClassifier.addDocument('eNotify', 'team__enotify');
teamClassifier.addDocument('eNotify message', 'team__enotify');
teamClassifier.addDocument('eNotice', 'team__enotify');
teamClassifier.addDocument('myenotice.com', 'team__enotify');
teamClassifier.addDocument('email list', 'team__enotify');
teamClassifier.addDocument('personalization', 'team__enotify');
teamClassifier.addDocument('mailing list', 'team__enotify');
teamClassifier.addDocument('dynamic filter enotify', 'team__enotify');
teamClassifier.addDocument('newsletter', 'team__enotify');
teamClassifier.addDocument('dynamic content', 'team__enotify');
teamClassifier.addDocument('unsubscribe', 'team__enotify');

//eNotify Beefree
teamClassifier.addDocument('eNotify editor', 'team__enotify_beefree');

//End of Year
teamClassifier.addDocument('end of year', 'team__end_of_year');
teamClassifier.addDocument('graduate seniors', 'team__end_of_year');


//Finalsite Dashboard
teamClassifier.addDocument('finalsite dashboard', 'team__finalsite_dashboard_site_stats');


//Files
teamClassifier.addDocument('File Manager', 'team__files');
teamClassifier.addDocument('file manager', 'team__files');
teamClassifier.addDocument('file manager', 'team__files');
teamClassifier.addDocument('file', 'team__files');
teamClassifier.addDocument('files', 'team__files');
teamClassifier.addDocument('Public Files', 'team__files');
teamClassifier.addDocument('Private Files', 'team__files');
teamClassifier.addDocument('disk space', 'team__files');
teamClassifier.addDocument('disk usage', 'team__files');
teamClassifier.addDocument('personal folder', 'team__files');
teamClassifier.addDocument('file extension', 'team__files');
teamClassifier.addDocument('folders', 'team__files');
teamClassifier.addDocument('FTP', 'team__files');


//Forms
teamClassifier.addDocument('cf_forms', 'team__forms');
teamClassifier.addDocument('formID', 'team__forms');
teamClassifier.addDocument('form', 'team__forms');
teamClassifier.addDocument('form', 'team__forms');
teamClassifier.addDocument('form', 'team__forms');
teamClassifier.addDocument('form issue', 'team__forms');
teamClassifier.addDocument('forms', 'team__forms');
teamClassifier.addDocument('personalization', 'team__forms');
teamClassifier.addDocument('Forms Manager', 'team__forms');
teamClassifier.addDocument('create form', 'team__forms');
teamClassifier.addDocument('form submission', 'team__forms');
teamClassifier.addDocument('sell tickets', 'team__forms');
teamClassifier.addDocument('submission', 'team__forms');
teamClassifier.addDocument('form notifications', 'team__forms');
teamClassifier.addDocument('giving form', 'team__forms');
teamClassifier.addDocument('submit', 'team__forms');
teamClassifier.addDocument('confirmation email', 'team__forms');
teamClassifier.addDocument('continue to payment', 'team__forms');
teamClassifier.addDocument('online application', 'team__forms');
teamClassifier.addDocument('application form', 'team__forms');

//FS Social
teamClassifier.addDocument('messaging', 'team__fs_social');


//Google Analytics
teamClassifier.addDocument('analytics', 'team__google_analytics_tracking');
teamClassifier.addDocument('Google Analytics', 'team__google_analytics_tracking');
teamClassifier.addDocument('tracking code', 'team__google_analytics_tracking');
teamClassifier.addDocument('Tag Manager', 'team__google_analytics_tracking');
teamClassifier.addDocument('Google Tag Manager', 'team__google_analytics_tracking');
teamClassifier.addDocument('page views', 'team__google_analytics_tracking');
teamClassifier.addDocument('bounce rate', 'team__google_analytics_tracking');
teamClassifier.addDocument('statistics', 'team__google_analytics_tracking');
teamClassifier.addDocument('pixel', 'team__google_analytics_tracking');
teamClassifier.addDocument('tracking', 'team__google_analytics_tracking');

//Google Drive
teamClassifier.addDocument('Google Drive', 'team__google_drive');

//Gradebook
teamClassifier.addDocument('grade', 'team__gradebook');
teamClassifier.addDocument('grades', 'team__gradebook');
teamClassifier.addDocument('gradebook', 'team__gradebook');
teamClassifier.addDocument('gradebook', 'team__gradebook');
teamClassifier.addDocument('gradebook', 'team__gradebook');
teamClassifier.addDocument('grade reports', 'team__gradebook');
teamClassifier.addDocument('report cards', 'team__gradebook');
teamClassifier.addDocument('marking period', 'team__gradebook');
teamClassifier.addDocument('marking periods', 'team__gradebook');
teamClassifier.addDocument('skill', 'team__gradebook');
teamClassifier.addDocument('skill section', 'team__gradebook');
teamClassifier.addDocument('skill sections', 'team__gradebook');

//Groups
teamClassifier.addDocument('group', 'team__groups');
teamClassifier.addDocument('groups', 'team__groups');
teamClassifier.addDocument('Group Manager', 'team__groups');
teamClassifier.addDocument('Selected Groups', 'team__groups');
teamClassifier.addDocument('Groups Manager', 'team__groups');
teamClassifier.addDocument('department', 'team__groups');
teamClassifier.addDocument('Departments', 'team__groups');
teamClassifier.addDocument('location', 'team__groups');

//iOS App
teamClassifier.addDocument('iOS', 'team__ios_app');
teamClassifier.addDocument('Android', 'team__ios_app');
teamClassifier.addDocument('ios app', 'team__ios_app');
teamClassifier.addDocument('Urban Airship', 'team__ios_app');
teamClassifier.addDocument('mobile app', 'team__ios_app');
teamClassifier.addDocument('app downloads', 'team__ios_app');
teamClassifier.addDocument('developer needs to update', 'team__ios_app');
teamClassifier.addDocument('developer of this app needs to update', 'team__ios_app');

//Media
teamClassifier.addDocument('video', 'team__media');
teamClassifier.addDocument('media', 'team__media');
teamClassifier.addDocument('Media Manager', 'team__media');
teamClassifier.addDocument('media player', 'team__media');
teamClassifier.addDocument('audio file', 'team__media');
teamClassifier.addDocument('video file', 'team__media');
teamClassifier.addDocument('livestreaming', 'team__media');
teamClassifier.addDocument('live streaming', 'team__media');
teamClassifier.addDocument('live-streaming', 'team__media');
teamClassifier.addDocument('Quicktime', 'team__media');
teamClassifier.addDocument('.m4a', 'team__media');
teamClassifier.addDocument('.mov', 'team__media');
teamClassifier.addDocument('.mp3', 'team__media');
teamClassifier.addDocument('.m4v', 'team__media');

//News
teamClassifier.addDocument('News Manager', 'team__news');
teamClassifier.addDocument('news post', 'team__news');
teamClassifier.addDocument('news article', 'team__news');
teamClassifier.addDocument('news items', 'team__news');
teamClassifier.addDocument('news story', 'team__news');
teamClassifier.addDocument('news stories', 'team__news');
teamClassifier.addDocument('thumbnail', 'team__news');

//Page Manager
teamClassifier.addDocument('page manager', 'team__page_manager');
teamClassifier.addDocument('page keyword', 'team__page_manager');
teamClassifier.addDocument('page keywords', 'team__page_manager');
teamClassifier.addDocument('multicontent page', 'team__page_manager');
teamClassifier.addDocument('multi-content page', 'team__page_manager');
teamClassifier.addDocument('page.cfm', 'team__page_manager');
teamClassifier.addDocument('admin.cfm?tab=1', 'team__page_manager');
teamClassifier.addDocument('admin.cfm?tab=0', 'team__page_manager');
teamClassifier.addDocument('admin.cfm?tab=2', 'team__page_manager');

//Page Pops
teamClassifier.addDocument('page pop', 'team__page_pops');
teamClassifier.addDocument('page pops', 'team__page_pops');
teamClassifier.addDocument('page pops manager', 'team__page_pops');
teamClassifier.addDocument('pagepop', 'team__page_pops');
teamClassifier.addDocument('pagepops manager', 'team__page_pops');
teamClassifier.addDocument('Don\'t Show Again', 'team__page_pops');


//Payments
teamClassifier.addDocument('payment', 'team__payments');
teamClassifier.addDocument('credit card', 'team__payments');
teamClassifier.addDocument('credit card', 'team__payments');
teamClassifier.addDocument('annual giving', 'team__payments');
teamClassifier.addDocument('recurring', 'team__payments');
teamClassifier.addDocument('charged', 'team__payments');
teamClassifier.addDocument('donate', 'team__payments');
teamClassifier.addDocument('donation', 'team__payments');
teamClassifier.addDocument('donations', 'team__payments');
teamClassifier.addDocument('authorization code', 'team__payments');
teamClassifier.addDocument('Payment Manager', 'team__payments');
teamClassifier.addDocument('eCheck', 'team__payments');
teamClassifier.addDocument('eChecks', 'team__payments');
teamClassifier.addDocument('digital checks', 'team__payments');

teamClassifier.addDocument('paypal', 'team__payments');
teamClassifier.addDocument('PayPal', 'team__payments');
teamClassifier.addDocument('payflow', 'team__payments');
teamClassifier.addDocument('authorize.net', 'team__payments');
teamClassifier.addDocument('network merchants', 'team__payments');
teamClassifier.addDocument('nmi', 'team__payments');
teamClassifier.addDocument('diamondmind', 'team__payments');
teamClassifier.addDocument('diamond mind', 'team__payments');
teamClassifier.addDocument('stripe', 'team__payments');
teamClassifier.addDocument('first data', 'team__payments');
teamClassifier.addDocument('cybersource', 'team__payments');

//Payment Gateway Setups
teamClassifier.addDocument('Payment Gateway Setup Form', 'team__payment_gateway_setups');
teamClassifier.addDocument('Payment Gateway Setup', 'team__payment_gateway_setups');
teamClassifier.addDocument('Form Submission Received for form: Payment Gateway Setup Form', 'team__payment_gateway_setups');

//PCI Security Scans
teamClassifier.addDocument('pci scan', 'team__pci_security_scans');
teamClassifier.addDocument('trustwave', 'team__pci_security_scans');
teamClassifier.addDocument('pci compliance', 'team__pci_security_scans');

//Portals
teamClassifier.addDocument('portal page', 'team__portals');
teamClassifier.addDocument('portals', 'team__portals');


//Posts
teamClassifier.addDocument('Posts Manager', 'team__posts');
teamClassifier.addDocument('Posts', 'team__posts');
teamClassifier.addDocument('Board', 'team__posts');

//Quizzes
teamClassifier.addDocument('quiz', 'team__quizzes');
teamClassifier.addDocument('quiz', 'team__quizzes');
teamClassifier.addDocument('quiz', 'team__quizzes');
teamClassifier.addDocument('quiz', 'team__quizzes');
teamClassifier.addDocument('quiz', 'team__quizzes');
teamClassifier.addDocument('quizzes', 'team__quizzes');

//Redactor
teamClassifier.addDocument('editor', 'team__redactor');
teamClassifier.addDocument('redactor', 'team__redactor');
teamClassifier.addDocument('editing window', 'team__redactor');
teamClassifier.addDocument('composer editor', 'team__redactor');

//Registrations
teamClassifier.addDocument('Registration Manager', 'team__registrations');
teamClassifier.addDocument('Registration Manager', 'team__registrations');
teamClassifier.addDocument('registration', 'team__registrations');
teamClassifier.addDocument('registration platform', 'team__registrations');
teamClassifier.addDocument('registration form', 'team__registrations');
teamClassifier.addDocument('summer camp', 'team__registrations');
teamClassifier.addDocument('waitlist', 'team__registrations');
teamClassifier.addDocument('attendee', 'team__registrations');

//Schoolsuite
teamClassifier.addDocument('Data Migration Questionnaire', 'team__schoolsuite');
teamClassifier.addDocument('schoolsuite', 'team__schoolsuite');

//SEO
teamClassifier.addDocument('SEO', 'team__search_engine_optimization');
teamClassifier.addDocument('SEO', 'team__search_engine_optimization');
teamClassifier.addDocument('SEO', 'team__search_engine_optimization');
teamClassifier.addDocument('search engine optimization', 'team__search_engine_optimization');
teamClassifier.addDocument('search ranking', 'team__search_engine_optimization');
teamClassifier.addDocument('robots.txt', 'team__search_engine_optimization');

//Services
teamClassifier.addDocument('Integrated Services Manager', 'team__services_modules');


//Site Launch
teamClassifier.addDocument('site launch', 'team__site_launch');
teamClassifier.addDocument('launching', 'team__site_launch');
teamClassifier.addDocument('dns instructions', 'team__site_launch');
teamClassifier.addDocument('DNS Instructions', 'team__site_launch');
teamClassifier.addDocument('Form Submission Received for form: Site Launch Procedure', 'team__site_launch');
teamClassifier.addDocument('Desired Launch Date', 'team__site_launch');
teamClassifier.addDocument('completed Deployment', 'team__site_launch');
teamClassifier.addDocument('ready to launch', 'team__site_launch');

//Site Performance
teamClassifier.addDocument('503', 'team__site_performance');
teamClassifier.addDocument('site down', 'team__site_performance');
teamClassifier.addDocument('outage', 'team__site_performance');
teamClassifier.addDocument('website performance', 'team__site_performance');
teamClassifier.addDocument('site performance', 'team__site_performance');
teamClassifier.addDocument('slow loading times', 'team__site_performance');
teamClassifier.addDocument('website was down', 'team__site_performance');
teamClassifier.addDocument('site was down', 'team__site_performance');
teamClassifier.addDocument('slow load times', 'team__site_performance');
teamClassifier.addDocument('loading slowly', 'team__site_performance');
teamClassifier.addDocument('slow response', 'team__site_performance');

//Site Search
teamClassifier.addDocument('search', 'team__site_search');
teamClassifier.addDocument('search feature', 'team__site_search');
teamClassifier.addDocument('search on our website', 'team__site_search');
teamClassifier.addDocument('search results', 'team__site_search');


//Site Setup
teamClassifier.addDocument('New Client Site Setup', 'team__site_setup');
teamClassifier.addDocument('new Finalsite site', 'team__site_setup');


//SIS

teamClassifier.addDocument('integration', 'team__student_information_systems');
teamClassifier.addDocument('integration', 'team__student_information_systems');
teamClassifier.addDocument('integration', 'team__student_information_systems');
teamClassifier.addDocument('integration', 'team__student_information_systems');
teamClassifier.addDocument('integration', 'team__student_information_systems');
teamClassifier.addDocument('integration', 'team__student_information_systems');
teamClassifier.addDocument('directory synch', 'team__student_information_systems');
teamClassifier.addDocument('field mappings', 'team__student_information_systems');
teamClassifier.addDocument('synched with', 'team__student_information_systems');
teamClassifier.addDocument('database', 'team__student_information_systems');
teamClassifier.addDocument('data sync', 'team__student_information_systems');
teamClassifier.addDocument('mapped fields', 'team__student_information_systems');
teamClassifier.addDocument('nightly sync', 'team__student_information_systems');
teamClassifier.addDocument('pulled over', 'team__student_information_systems');

teamClassifier.addDocument('Senior Systems', 'team__student_information_systems');
teamClassifier.addDocument('Senior Systems', 'team__student_information_systems');
teamClassifier.addDocument('Senior Systems', 'team__student_information_systems');
teamClassifier.addDocument('SS', 'team__student_information_systems');
teamClassifier.addDocument('Veracross', 'team__student_information_systems');
teamClassifier.addDocument('Veracross', 'team__student_information_systems');
teamClassifier.addDocument('Veracross', 'team__student_information_systems');
teamClassifier.addDocument('Veracross Athletics', 'team__student_information_systems');
teamClassifier.addDocument('Powerschool', 'team__student_information_systems');
teamClassifier.addDocument('Powerschool', 'team__student_information_systems');
teamClassifier.addDocument('Powerschool', 'team__student_information_systems');
teamClassifier.addDocument('PCR', 'team__student_information_systems');
teamClassifier.addDocument('PCR', 'team__student_information_systems');
teamClassifier.addDocument('PCR', 'team__student_information_systems');
teamClassifier.addDocument('Dataline', 'team__student_information_systems');
teamClassifier.addDocument('FinalsiteOpen', 'team__student_information_systems');
teamClassifier.addDocument('FinalsiteOpen', 'team__student_information_systems');
teamClassifier.addDocument('FinalsiteOpen', 'team__student_information_systems');
teamClassifier.addDocument('inResonance', 'team__student_information_systems');
teamClassifier.addDocument('inResonance', 'team__student_information_systems');
teamClassifier.addDocument('inResonance', 'team__student_information_systems');
teamClassifier.addDocument('Rediker', 'team__student_information_systems');
teamClassifier.addDocument('Rediker', 'team__student_information_systems');
teamClassifier.addDocument('Rediker', 'team__student_information_systems');

//Social Media
teamClassifier.addDocument('social media', 'team__social_media__feeds');
teamClassifier.addDocument('facebook', 'team__social_media__feeds');
teamClassifier.addDocument('Facebook', 'team__social_media__feeds');
teamClassifier.addDocument('Facebook feed', 'team__social_media__feeds');
teamClassifier.addDocument('facebook feed', 'team__social_media__feeds');
teamClassifier.addDocument('FB', 'team__social_media__feeds');
teamClassifier.addDocument('FB account', 'team__social_media__feeds');
teamClassifier.addDocument('twitter', 'team__social_media__feeds');
teamClassifier.addDocument('instagram', 'team__social_media__feeds');
teamClassifier.addDocument('feed', 'team__social_media__feeds');
teamClassifier.addDocument('feeds', 'team__social_media__feeds');
teamClassifier.addDocument('juicer', 'team__social_media__feeds');

//SSO/Authentication
teamClassifier.addDocument('sso', 'team__sso_authentication');
teamClassifier.addDocument('sso', 'team__sso_authentication');
teamClassifier.addDocument('SSO', 'team__sso_authentication');
teamClassifier.addDocument('SSO', 'team__sso_authentication');
teamClassifier.addDocument('SSO', 'team__sso_authentication');
teamClassifier.addDocument('SSO links', 'team__sso_authentication');
teamClassifier.addDocument('authenticate', 'team__sso_authentication');
teamClassifier.addDocument('authenticate', 'team__sso_authentication');
teamClassifier.addDocument('authentication', 'team__sso_authentication');
teamClassifier.addDocument('authentication', 'team__sso_authentication');
teamClassifier.addDocument('LDAP', 'team__sso_authentication');
teamClassifier.addDocument('single sign-on', 'team__sso_authentication');
teamClassifier.addDocument('single signon', 'team__sso_authentication');
teamClassifier.addDocument('single sign on', 'team__sso_authentication');
teamClassifier.addDocument('logging in', 'team__sso_authentication');

//Support Infrastructure
teamClassifier.addDocument('submit support tickets', 'team__support_infrastructure');
teamClassifier.addDocument('submit tickets', 'team__support_infrastructure');
teamClassifier.addDocument('ticket access', 'team__support_infrastructure');
teamClassifier.addDocument('ticket rights', 'team__support_infrastructure');
teamClassifier.addDocument('training resources', 'team__support_infrastructure');
teamClassifier.addDocument('Finalsite Training', 'team__support_infrastructure');
teamClassifier.addDocument('sandbox', 'team__support_infrastructure');
teamClassifier.addDocument('sandbox site', 'team__support_infrastructure');


//Voicemail
teamClassifier.addDocument('VOICE MESSAGE', 'team__voicemail');




/*----------------------------*/


//Finalize and save to file
teamClassifier.train();
teamClassifier.save('classifiers/teamClassifier.json', function(err, teamClassifier){
//teamClassifier.save('classifiers/teamClassifierBrain.json', function(err, teamClassifier){
	console.log('Saving teams...');
	});



