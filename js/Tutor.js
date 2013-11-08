define("tutor/Tutor", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('Tutor');
smalltalk.packages["Tutor"].transport = {"type":"amd","amdNamespace":"tutor"};

smalltalk.addClass('Lesson', smalltalk.Widget, ['lessonString', 'typedString', 'lessonStringContainer', 'typedStringContainer', 'tagBrush'], 'Tutor');
smalltalk.addMethod(
smalltalk.method({
selector: "addChar:",
category: 'not yet classified',
fn: function (char){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@typedString"]=_st(self["@typedString"]).__comma(char);
self._redrawLessonStrings();
return self}, function($ctx1) {$ctx1.fill(self,"addChar:",{char:char},smalltalk.Lesson)})},
args: ["char"],
source: "addChar: char\x0a\x09typedString := typedString , char.\x0a\x09self redrawLessonStrings.",
messageSends: [",", "redrawLessonStrings"],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
smalltalk.method({
selector: "backspace",
category: 'not yet classified',
fn: function (){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@typedString"]=_st(self["@typedString"])._copyFrom_to_((1),_st(_st(self["@typedString"])._size()).__minus((1)));
$1=$Transcript();
_st($1)._show_(self["@typedString"]);
$2=_st($1)._cr();
self._redrawLessonStrings();
return self}, function($ctx1) {$ctx1.fill(self,"backspace",{},smalltalk.Lesson)})},
args: [],
source: "backspace\x0a\x09typedString := typedString copyFrom: 1 to: typedString size - 1.\x0a\x09Transcript show: typedString; cr.\x0a\x09self redrawLessonStrings.\x0a\x09\x0a\x09",
messageSends: ["copyFrom:to:", "-", "size", "show:", "cr", "redrawLessonStrings"],
referencedClasses: ["Transcript"]
}),
smalltalk.Lesson);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lessonString"]="We used to cut the green green grass.";
self["@typedString"]="We ufed to cp";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Lesson)})},
args: [],
source: "initialize\x0a\x09lessonString :=\x09'We used to cut the green green grass.' .\x0a\x09typedString := 'We ufed to cp' .\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
smalltalk.method({
selector: "redrawLessonStrings",
category: 'not yet classified',
fn: function (){
var self=this;
var caretIndex,letterToType;
function $Nil(){return smalltalk.Nil||(typeof Nil=="undefined"?nil:Nil)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
caretIndex=_st(_st(_st(self["@typedString"])._size()).__plus((1)))._min_(_st(self["@lessonString"])._size());
letterToType=_st(self["@lessonString"])._at_(caretIndex);
_st(_st(self["@lessonStringContainer"])._asJQuery())._empty();
_st(_st(self["@typedStringContainer"])._asJQuery())._empty();
$1=self["@lessonStringContainer"];
_st($1)._with_(_st(self["@lessonString"])._copyFrom_to_((1),_st(caretIndex).__minus((1))));
$2=_st(self["@tagBrush"])._span();
_st($2)._class_("letters-to-type");
$3=_st($2)._with_(letterToType);
_st($1)._with_($3);
$4=_st($1)._with_(_st(self["@lessonString"])._copyFrom_to_(_st(caretIndex).__plus((1)),_st(self["@lessonString"])._size()));
_st(self["@typedString"])._withIndexDo_((function(letter,index){
return smalltalk.withContext(function($ctx2) {
$5=_st(_st(self["@lessonString"])._at_ifAbsent_(index,$Nil())).__eq_eq(letter);
if(smalltalk.assert($5)){
return _st(self["@typedStringContainer"])._with_(letter);
} else {
return _st(self["@typedStringContainer"])._with_((function(){
return smalltalk.withContext(function($ctx3) {
$6=_st(self["@tagBrush"])._span();
_st($6)._class_("error");
$7=_st($6)._with_(letter);
return $7;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
};
}, function($ctx2) {$ctx2.fillBlock({letter:letter,index:index},$ctx1,1)})}));
$8=_st(self["@tagBrush"])._span();
_st($8)._class_("caret");
$9=_st($8)._with_("_");
_st(self["@typedStringContainer"])._with_($9);
return self}, function($ctx1) {$ctx1.fill(self,"redrawLessonStrings",{caretIndex:caretIndex,letterToType:letterToType},smalltalk.Lesson)})},
args: [],
source: "redrawLessonStrings\x0a\x09\x22Comment\x22\x0a\x09\x0a\x09| caretIndex letterToType |\x0a\x09caretIndex := (typedString size + 1) min: lessonString size. \x0a\x09letterToType := lessonString at: caretIndex.\x0a\x09\x0a\x09\x22show letter to be typed on the keypad\x22\x0a\x09\x22Tutor instance twiddlerKeypad showChordFor: letterToType.\x22\x0a\x09\x0a\x09\x22clear lesson string & typed string \x22\x0a\x09lessonStringContainer asJQuery empty.\x0a\x09typedStringContainer asJQuery empty.\x0a\x09\x0a\x09\x0a\x09\x22show lesson string\x22\x0a\x09lessonStringContainer \x0a\x09\x09with: (lessonString copyFrom: 1 to: caretIndex -1) ;\x0a\x09\x09with: (tagBrush span class: 'letters-to-type'; with: letterToType) ;\x0a\x09\x09with: (lessonString copyFrom: caretIndex + 1 to: lessonString size).\x0a\x0a\x09\x22show typed string\x22\x0a\x09\x0a\x09typedString withIndexDo: [:letter :index |\x0a\x09\x09(lessonString at: index ifAbsent: Nil) == letter \x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09typedStringContainer with: letter.\x0a\x09\x09\x09]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09typedStringContainer with:  [\x0a\x09\x09\x09\x09\x09tagBrush span class: 'error'; with: letter.\x0a\x09\x09\x09\x09\x09]\x0a\x09\x09\x09]\x0a\x09].\x0a\x09typedStringContainer with: (tagBrush span class: 'caret'; with: '_').\x0a\x09\x0a\x09\x0a\x09\x0a\x09",
messageSends: ["min:", "+", "size", "at:", "empty", "asJQuery", "with:", "copyFrom:to:", "-", "class:", "span", "withIndexDo:", "ifTrue:ifFalse:", "==", "at:ifAbsent:"],
referencedClasses: ["Nil"]
}),
smalltalk.Lesson);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
self["@tagBrush"]=html;
_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._style_("\x0a\x09\x09\x09\x09.lesson {\x0a\x09\x09\x09\x09\x09float: left;\x0a\x09\x09\x09\x09\x09padding-left: 30px;\x0a\x09\x09\x09\x09\x09height: 260px;\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09.lesson .exercise-text {\x0a\x09\x09\x09\x09\x09font-family: monospace;\x0a\x09\x09\x09\x09\x09font-size: 20px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09.lesson .letters-to-type {\x0a\x09\x09\x09\x09\x09background-color: #AAD;\x0a\x09\x09\x09\x09\x09outline: 2px solid #AAD;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.lesson .error {\x0a\x09\x09\x09\x09\x09color: red;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09.lesson .caret {\x0a\x09\x09\x09\x09\x09color: blue;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09");
$1=_st(html)._div();
_st($1)._class_("lesson");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._h1_("Lesson 1");
_st(html)._br();
$3=_st(html)._div();
_st($3)._class_("exercise-text");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx4) {
self["@lessonStringContainer"]=_st(_st(html)._pre())._class_("lesson-string");
self["@lessonStringContainer"];
self["@typedStringContainer"]=_st(_st(html)._pre())._class_("typed-string");
return self["@typedStringContainer"];
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.Lesson)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22The lesson area shows a line of text, shows the chord for the next letter or letter sequence to be typed, and tracks the user's speed and accuracy.\x22\x0a\x0a\x09tagBrush := html.\x0a\x09\x0a\x09html div \x0a\x09\x09with: [\x0a\x09\x09\x09html style: '\x0a\x09\x09\x09\x09.lesson {\x0a\x09\x09\x09\x09\x09float: left;\x0a\x09\x09\x09\x09\x09padding-left: 30px;\x0a\x09\x09\x09\x09\x09height: 260px;\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09.lesson .exercise-text {\x0a\x09\x09\x09\x09\x09font-family: monospace;\x0a\x09\x09\x09\x09\x09font-size: 20px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09.lesson .letters-to-type {\x0a\x09\x09\x09\x09\x09background-color: #AAD;\x0a\x09\x09\x09\x09\x09outline: 2px solid #AAD;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.lesson .error {\x0a\x09\x09\x09\x09\x09color: red;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09.lesson .caret {\x0a\x09\x09\x09\x09\x09color: blue;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09' .\x0a\x09\x09\x09\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'lesson' ; \x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html h1: 'Lesson 1'.\x0a\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09html div \x0a\x09\x09\x09\x09\x09\x09class: 'exercise-text';\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09lessonStringContainer := html pre class: 'lesson-string'.\x0a\x09\x0a\x09\x09\x09\x09\x09\x09\x09typedStringContainer := html pre class: 'typed-string'.\x0a\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09].\x0a\x0a\x09",
messageSends: ["with:", "div", "style:", "class:", "h1:", "br", "pre"],
referencedClasses: []
}),
smalltalk.Lesson);



smalltalk.addClass('Tutor', smalltalk.Widget, ['twiddlerKeypad', 'lesson', 'inputArea', 'ev'], 'Tutor');
smalltalk.addMethod(
smalltalk.method({
selector: "ev",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@ev"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"ev",{},smalltalk.Tutor)})},
args: [],
source: "ev\x0a\x09^ev.\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tutor);

smalltalk.addMethod(
smalltalk.method({
selector: "ev:",
category: 'not yet classified',
fn: function (e){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@ev"]=e;
return self}, function($ctx1) {$ctx1.fill(self,"ev:",{e:e},smalltalk.Tutor)})},
args: ["e"],
source: "ev: e\x0a\x09ev := e.\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tutor);

smalltalk.addMethod(
smalltalk.method({
selector: "handleKeyEvent:",
category: 'not yet classified',
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(_st(event)._keyCode()).__eq_eq((8));
if(smalltalk.assert($1)){
_st(self["@lesson"])._backspace();
};
$2=_st(_st(event)._keyCode()).__eq_eq((9));
if(! smalltalk.assert($2)){
_st(self["@lesson"])._addChar_(_st(_st(self["@inputArea"])._asJQuery())._val());
};
_st(_st(self["@inputArea"])._asJQuery())._val_("");
$3=event;
_st($3)._stopPropagation();
$4=_st($3)._preventDefault();
return self}, function($ctx1) {$ctx1.fill(self,"handleKeyEvent:",{event:event},smalltalk.Tutor)})},
args: ["event"],
source: "handleKeyEvent: event\x0a\x09\x22Extract a single letter or backspace from the input field. Defers execution to after the current call to allow the <input> to update its value.\x22\x0a\x0a\x09\x09\x0a\x09event keyCode == 8 \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09lesson backspace.\x0a\x09\x09].\x0a\x09event keyCode == 9\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09lesson addChar: inputArea asJQuery val.\x0a\x09\x09].\x0a\x09\x09\x0a\x09inputArea asJQuery val: ''.\x0a\x09event stopPropagation; preventDefault.\x0a\x09",
messageSends: ["ifTrue:", "==", "keyCode", "backspace", "ifFalse:", "addChar:", "val", "asJQuery", "val:", "stopPropagation", "preventDefault"],
referencedClasses: []
}),
smalltalk.Tutor);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $TwiddlerKeypad(){return smalltalk.TwiddlerKeypad||(typeof TwiddlerKeypad=="undefined"?nil:TwiddlerKeypad)}
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
self["@twiddlerKeypad"]=_st($TwiddlerKeypad())._new();
self["@lesson"]=_st($Lesson())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Tutor)})},
args: [],
source: "initialize\x0a\x09\x22Set up the whole application object with a keypad and a lesson screen.\x22\x0a\x09twiddlerKeypad := TwiddlerKeypad new.\x0a\x09lesson := Lesson new.\x0a\x09",
messageSends: ["new"],
referencedClasses: ["TwiddlerKeypad", "Lesson"]
}),
smalltalk.Tutor);

smalltalk.addMethod(
smalltalk.method({
selector: "lesson",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lesson"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lesson",{},smalltalk.Tutor)})},
args: [],
source: "lesson\x0a\x09^ lesson.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tutor);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Tutor(){return smalltalk.Tutor||(typeof Tutor=="undefined"?nil:Tutor)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$7,$8,$9,$10,$11,$12,$4,$13,$14,$15,$16,$2;
$1=_st(html)._div();
_st($1)._tabindex_((0));
_st($1)._onFocus_((function(){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._show_("app focus");
return _st(_st(self["@inputArea"])._asJQuery())._focus();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st($1)._style_("border: 2px solid red;");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._style_(" .menu-bar {\x0a\x09\x09\x09\x09}");
$3=_st(html)._div();
_st($3)._class_("menu-bar");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._button();
_st($5)._with_("Recreate App");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st($Tutor())._begin();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$6;
$7=_st(html)._button();
_st($7)._with_("More button");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st($Transcript())._show_("more clicked");
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)})}));
$8;
return _st(_st(html)._select())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$9=_st(html)._option();
_st($9)._with_("lesson 1");
$10=_st($9)._value_("1");
$10;
$11=_st(html)._option();
_st($11)._with_("lesson 2");
$12=_st($11)._value_("2");
return $12;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$4;
_st(html)._hr();
_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_(self["@twiddlerKeypad"]);
return _st(html)._with_(self["@lesson"]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,7)})}));
$13=_st(html)._div();
_st($13)._style_("clear: both");
$14=_st($13)._class_("clearfix");
$14;
$15=_st(html)._input();
_st($15)._type_("text");
_st($15)._class_("input-area");
$16=_st($15)._onKeyDown_((function(event){
return smalltalk.withContext(function($ctx3) {
return _st((function(){
return smalltalk.withContext(function($ctx4) {
return self._handleKeyEvent_(event);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,9)})}))._valueWithTimeout_((0));
}, function($ctx3) {$ctx3.fillBlock({event:event},$ctx2,8)})}));
self["@inputArea"]=$16;
return self["@inputArea"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.Tutor)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22render the whole application\x22\x0a\x0a\x09html div\x0a\x09\x09tabindex: 0;\x0a\x09\x09onFocus: [Transcript show: 'app focus'. inputArea asJQuery focus. ];\x0a\x09\x09style: 'border: 2px solid red;';\x0a\x09\x09with: [\x0a\x09\x09\x09html style: \x0a\x09\x09\x09\x09' .menu-bar {\x0a\x09\x09\x09\x09}'.\x0a\x09\x09\x09\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'menu-bar';\x0a\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09html button \x0a\x09\x09\x09\x09\x09\x09with: 'Recreate App';\x0a\x09\x09\x09\x09\x09\x09onClick: [Tutor begin].\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09\x09with: 'More button';\x0a\x09\x09\x09\x09\x09\x09onClick: [Transcript show: 'more clicked'].\x0a\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09html select\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09html option with: 'lesson 1'; value: '1'.\x0a\x09\x09\x09\x09\x09\x09\x09html option with: 'lesson 2'; value: '2'.\x0a\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09html hr.\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09html with: twiddlerKeypad.\x0a\x09\x09\x09\x09\x09\x09\x09html with: lesson.\x0a\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09html div style: 'clear: both'; class: 'clearfix'.\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09inputArea := html input \x0a\x09\x09\x09\x09\x09\x09type:'text'; \x0a\x09\x09\x09\x09\x09\x09class: 'input-area';\x0a\x09\x09\x09\x09\x09\x09onKeyDown: [:event | [ self handleKeyEvent: event ] valueWithTimeout: 0. ].\x0a\x09\x09]",
messageSends: ["tabindex:", "div", "onFocus:", "show:", "focus", "asJQuery", "style:", "with:", "class:", "button", "onClick:", "begin", "select", "option", "value:", "hr", "type:", "input", "onKeyDown:", "valueWithTimeout:", "handleKeyEvent:"],
referencedClasses: ["Transcript", "Tutor"]
}),
smalltalk.Tutor);

smalltalk.addMethod(
smalltalk.method({
selector: "twiddlerKeypad",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@twiddlerKeypad"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"twiddlerKeypad",{},smalltalk.Tutor)})},
args: [],
source: "twiddlerKeypad\x0a\x09^ twiddlerKeypad.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tutor);


smalltalk.Tutor.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st("#tutor"._asJQuery())._empty();
$1=self._new();
_st($1)._appendToJQuery_("#tutor"._asJQuery());
$2=_st($1)._yourself();
self["@instance"]=$2;
_st(_st(self["@instance"])._lesson())._redrawLessonStrings();
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.Tutor.klass)})},
args: [],
source: "begin\x0a\x09\x22create the button, keypad and lesson and embed them into the page\x22\x0a\x0a\x09'#tutor' asJQuery empty.\x0a\x09\x0a\x09instance := self new appendToJQuery: ('#tutor' asJQuery) ; yourself.\x0a\x09instance lesson redrawLessonStrings.",
messageSends: ["empty", "asJQuery", "appendToJQuery:", "new", "yourself", "redrawLessonStrings", "lesson"],
referencedClasses: []
}),
smalltalk.Tutor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@instance"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.Tutor.klass)})},
args: [],
source: "instance\x0a\x09^instance.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tutor.klass);


smalltalk.addClass('TwiddlerKeypad', smalltalk.Widget, ['count', 'header', 'root', 'keys', 'columns', 'keyToChordMap'], 'Tutor');
smalltalk.addMethod(
smalltalk.method({
selector: "chordFor:",
category: 'not yet classified',
fn: function (keySequence){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@keyToChordMap"])._at_(keySequence);
return $1;
}, function($ctx1) {$ctx1.fill(self,"chordFor:",{keySequence:keySequence},smalltalk.TwiddlerKeypad)})},
args: ["keySequence"],
source: "chordFor: keySequence\x0a\x09\x22Looks up the chord matching the key(s), indicated by a one or more digit string; or integer key code.\x22\x0a\x09\x0a\x09^ keyToChordMap at: keySequence.",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.TwiddlerKeypad);

smalltalk.addMethod(
smalltalk.method({
selector: "clearChord",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@keys"])._do_((function(row){
return smalltalk.withContext(function($ctx2) {
return _st(row)._do_((function(key){
return smalltalk.withContext(function($ctx3) {
return _st(_st(key)._asJQuery())._removeClass_("pressed");
}, function($ctx3) {$ctx3.fillBlock({key:key},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clearChord",{},smalltalk.TwiddlerKeypad)})},
args: [],
source: "clearChord\x0a\x09\x22Shows all buttons as released\x22\x0a\x09\x0a\x09keys do: [:row |\x0a\x09\x09row do: [:key |\x0a\x09\x09\x09key asJQuery removeClass: 'pressed'.\x0a\x09\x09].\x0a\x09].",
messageSends: ["do:", "removeClass:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TwiddlerKeypad);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
self["@columns"]=_st($Dictionary())._new();
$1=self["@columns"];
_st($1)._at_put_("l",(3));
_st($1)._at_put_("m",(2));
$2=_st($1)._at_put_("r",(1));
self["@keys"]=_st($Array())._new();
(4)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@keys"])._add_(_st($Array())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self["@keyToChordMap"]=_st($Dictionary())._new();
_st(self._keyConfiguration())._linesDo_((function(line){
var trimmedLine,tokens;
return smalltalk.withContext(function($ctx2) {
trimmedLine=_st(_st(_st(line)._trimBoth())._tokenize_("#"))._at_((1));
trimmedLine;
$3=_st(trimmedLine).__eq_eq("");
if(! smalltalk.assert($3)){
tokens=_st(trimmedLine)._tokenize_("\x5cs+"._asRegexp());
tokens;
$4=_st(_st(tokens)._at_((4)))._match_("\x22.+\x22");
if(smalltalk.assert($4)){
return _st(self["@keyToChordMap"])._at_put_(_st(_st(tokens)._at_((4)))._trimBoth_("\x22"),_st(tokens)._at_((2)));
};
};
}, function($ctx2) {$ctx2.fillBlock({line:line,trimmedLine:trimmedLine,tokens:tokens},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TwiddlerKeypad)})},
args: [],
source: "initialize\x0a\x09\x22comment stating purpose of message\x22\x0a\x09columns := Dictionary new.\x0a\x09columns\x0a\x09\x09at: 'l' put: 3;\x0a\x09\x09at: 'm' put: 2;\x0a\x09\x09at: 'r' put: 1.\x0a\x09\x0a\x09keys := Array new.\x0a\x094 timesRepeat:[keys add: Array new.].\x0a\x09\x0a\x09keyToChordMap := Dictionary new.\x0a\x09\x0a\x09self keyConfiguration linesDo: [:line | \x0a\x09\x09| trimmedLine tokens |\x0a\x09\x09trimmedLine := (line trimBoth tokenize: '#') at: 1.\x0a\x09\x09trimmedLine == '' ifFalse: [\x0a\x09\x09\x09tokens := trimmedLine tokenize: '\x5cs+' asRegexp.\x0a\x09\x09\x09((tokens at: 4) match: '\x22.+\x22') ifTrue: [\x0a\x09\x09\x09\x09keyToChordMap at: ((tokens at: 4)trimBoth: '\x22') put: (tokens at: 2 ).\x0a\x09\x09\x09]\x0a\x09\x09]\x0a\x09].",
messageSends: ["new", "at:put:", "timesRepeat:", "add:", "linesDo:", "keyConfiguration", "at:", "tokenize:", "trimBoth", "ifFalse:", "==", "asRegexp", "ifTrue:", "match:", "trimBoth:"],
referencedClasses: ["Dictionary", "Array"]
}),
smalltalk.TwiddlerKeypad);

smalltalk.addMethod(
smalltalk.method({
selector: "keyConfiguration",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "# The TabSpace Twiddler Keymap\x0a\x0a# Brandon Craig Rhodes http://www.rhodesmill.org/brandon\x0a# Version 0.3, Monday 15 November 1999\x0a# May be shared and modified if credited\x0a\x0a# The three top buttons map to the most frequently used keys.  Note\x0a# that in sane command line environments (those that support\x0a# completions), tab is used nearbyly as much as backspace and both are\x0a# often used many times per line (so we make them more convenient than\x0a# a carriage return).\x0a\x0a0     r000 = BACKSPACE\x0a0     m000 = 32\x0a0     l000 = TAB\x0a\x0a# Next are the nine most common letters, which can each be produced\x0a# with a single keypress.  They are carefully arranged so that the\x0a# most common combinations of them can be pressed simultaneously to\x0a# produce double letters.  In each case the double letter combinations\x0a# output their two constituent letters in the most common order\x0a# (though with some such as er-re it was a close call).  The doubles\x0a# can be expected to account for roughly one-third of the adjacent\x0a# letter pairs in normal English text!\x0a\x0a0     m000 = \x22 \x22\x0a0     0m00 = \x22e\x22\x0a0     00m0 = \x22t\x22\x0a0     000m = \x22h\x22\x0a0     0l00 = \x22o\x22\x0a0     00l0 = \x22r\x22\x0a0     000l = \x22s\x22\x0a0     0r00 = \x22i\x22\x0a0     00r0 = \x22n\x22\x0a0     000r = \x22a\x22\x0a\x0a# 0     0r0r = \x22ai\x22\x0a# 0     0r0m = \x22hi\x22\x0a# 0     0r0l = \x22is\x22\x0a# 0     0rr0 = \x22in\x22\x0a# 0     0rm0 = \x22it\x22\x0a# 0     0rl0 = \x22ri\x22\x0a# 0     0m0r = \x22ea\x22\x0a# 0     0m0m = \x22he\x22\x0a# 0     0m0l = \x22es\x22\x0a# 0     0mr0 = \x22en\x22\x0a# 0     0mm0 = \x22te\x22\x0a# 0     0ml0 = \x22er\x22\x0a# 0     0l0r = \x22oa\x22\x0a# 0     0l0m = \x22ho\x22\x0a# 0     0l0l = \x22so\x22\x0a# 0     0lr0 = \x22on\x22\x0a# 0     0lm0 = \x22to\x22\x0a# 0     0ll0 = \x22or\x22\x0a# 0     00rr = \x22an\x22\x0a# 0     00rm = \x22hn\x22\x0a# 0     00rl = \x22ns\x22\x0a# 0     00mr = \x22at\x22\x0a# 0     00mm = \x22th\x22\x0a# 0     00ml = \x22st\x22\x0a# 0     00lr = \x22ar\x22\x0a# 0     00lm = \x22hr\x22\x0a# 0     00ll = \x22rs\x22\x0a\x0a# Every other letter is produced by pressing the top middle button\x0a# (the spacebar) and some combination of the lower keys.  It is\x0a# expected that during normal typing the index finger will stay on the\x0a# spacebar.  A few combinations that involve these second-tier letters\x0a# are also supported.\x0a\x0a0     mm00 = \x22d\x22\x0a0     m0m0 = \x22l\x22\x0a0     m00m = \x22m\x22\x0a0     mr00 = \x22c\x22\x0a0     m0r0 = \x22f\x22\x0a0     m00r = \x22g\x22\x0a0     ml00 = \x22u\x22\x0a0     m0l0 = \x22w\x22\x0a0     m00l = \x22y\x22\x0a0     mmm0 = \x22p\x22\x0a0     m0mm = \x22k\x22\x0a0     mrr0 = \x22b\x22\x0a0     m0rr = \x22j\x22\x0a0     mll0 = \x22v\x22\x0a0     m0ll = \x22x\x22\x0a0     mm0m = \x22q\x22\x0a0     ml0l = \x22z\x22\x0a\x0a#0     mlr0 = \x22of\x22\x0a#0     mmr0 = \x22nd\x22\x0a#0     mr0m = \x22ch\x22\x0a#0     ml0m = \x22qu\x22\x0a#0     m0lm = \x22wh\x22\x0a\x0a# Finally, we support some three-letter combinations.  As above, note\x0a# that they are produced simply by pressing all of their letters\x0a# simulateously.\x0a\x0a# 0     0mmm = \x22the\x22\x0a# 0     0rrr = \x22ain\x22\x0a# 0     0mlr = \x22are\x22\x0a# 0     mrrr = \x22ing\x22\x0a# 0     mmrr = \x22and\x22\x0a# 0     mlrr = \x22ong\x22\x0a\x0a# As everyone knows, keypads are supposed to be three by three.\x0a\x0a0     rr00 = \x221\x22\x0a0     rm00 = \x222\x22\x0a0     rl00 = \x223\x22\x0a0     r0r0 = \x224\x22\x0a0     r0m0 = \x225\x22\x0a0     r0l0 = \x226\x22\x0a0     r00r = \x227\x22\x0a0     r00m = \x228\x22\x0a0     r00l = \x229\x22\x0a0     rrr0 = \x220\x22\x0a0     rmm0 = \x22.\x22\x0a0     rll0 = \x22-\x22\x0a\x0a# Below the number keypad we place three tiers of mathematical\x0a# operators and symbols.  First come the arithmetic operators, which\x0a# we cascade off of the minus sign.\x0a\x0a0     rlm0 = \x22+\x22\x0a0     rlr0 = \x22^\x22\x0a0     rl0l = \x22/\x22\x0a0     rl0m = \x22*\x22\x0a0     rl0r = \x22%\x22\x0a\x0a# The middle tier of operators include those usually used for logic\x0a# operations.\x0a\x0a0     rmr0 = \x22&\x22\x0a0     rml0 = \x22|\x22\x0a0     rm0m = \x22~\x22\x0a0     rm0r = \x22^\x22\x0a\x0a# The double key combinations along the bottom two rows\x0a# produce the comparitive operators.  Note that the greater than and\x0a# less than symbols, which we also use as angle brackets, are in\x0a# positions similar to all other brackets (see below).\x0a\x0a0     r0rr = \x22<\x22\x0a0     r0mm = \x22>\x22\x0a0     r0ll = \x22=\x22\x0a\x0a# The last major section involves punctuation.  The period, comma, and\x0a# enter key are both intended to be very easy to press.  The semicolon\x0a# is of course produced by pressing period and comma simultaneously.\x0a# Quotes and brackets are also available here.\x0a\x0a0     ll00 = \x22.\x22\x0a0     lll0 = \x22;\x22\x0a0     l0l0 = \x22,\x22\x0a0     l0ll = \x22:\x22\x0a0     l00l = 34\x09\x09# quotation mark\x0a0     l00m = \x22\x22\x0a0     l00r = \x22`\x22\x0a0     mmmm = 13,10 # ENTER\x0a0     lr00 = \x22-\x22\x0a0     lrr0 = \x22[\x22\x0a0     lmm0 = \x22]\x22\x0a0     l0r0 = \x22(\x22\x0a0     l0m0 = \x22)\x22\x0a0     l0rr = \x22{\x22\x0a0     l0mm = \x22}\x22\x0a\x0a# Now that we have exhausted the same-row combinations of the lower\x0a# three keys, we place two more echelons of symbols: one of textual\x0a# punctuation, and the other of more obscure symbols more often\x0a# encountered in programming (and computer typesetting).  People who\x0a# use such keys exceedingly often may have cause to be upset with me.\x0a\x0a0     llm0 = \x22?\x22\x0a0     llr0 = \x22!\x22\x0a0     ll0l = \x22$\x22\x0a0     ll0m = \x22#\x22\x0a0     ll0r = \x22~\x22\x0a0     llll = \x22@\x22\x0a0     llmm = \x22&\x22\x0a\x0a0     lmr0 = \x22/\x22\x0a0     lml0 = \x22\x5c\x5c\x22\x0a0     lm0m = \x22_\x22\x0a0     lm0r = \x22%\x22\x0a\x0a# The FN modifier has no useful native function under X-windows\x0a# (unlike the Shift, CTRL, and ALT modifiers), so we use it for useful\x0a# keystrokes that need to be easy to get to.  Hitting single keys with\x0a# FUNC give an arrow key rose and other screen navigation sequences.\x0a# This is also where we put important codes like Escape, Delete, Null,\x0a# and Linefeed.\x0a\x0aNUM  r000 = 127            # func + BACKSPACE = delete (ascii rubout)\x0aNUM  m000 = NULL           # func + SPACE = null\x0aNUM  l000 = ESCAPE         # func + TAB = ESCAPE\x0aNUM  lm00 = 10             # func + ENTER = linefeed\x0aNUM  0m00 = 20,\x22FF52\x22,20   # XK_Up\x0aNUM  00m0 = 20,\x22FF54\x22,20   # XK_Down\x0aNUM  0r00 = 20,\x22FF51\x22,20   # XK_Left\x0aNUM  0l00 = 20,\x22FF53\x22,20   # XK_Right\x0aNUM  00r0 = 20,\x22FF55\x22,20   # XK_Page_Up\x0aNUM  000r = 20,\x22FF56\x22,20   # XK_Page_Down\x0aNUM  00l0 = 20,\x22FF95\x22,20   # XK_Home\x0aNUM  000l = 20,\x22FF9C\x22,20   # XK_End\x0aNUM  000m = 20,\x22FF9E\x22,20   # XK_Insert\x0a\x0a# FUNC + keypad produces function keys.\x0a\x0aNUM  rr00 = 20,\x22FFBE\x22,20   # XK_F1\x0aNUM  rm00 = 20,\x22FFBF\x22,20   # XK_F2\x0aNUM  rl00 = 20,\x22FFC0\x22,20   # XK_F3\x0aNUM  r0r0 = 20,\x22FFC1\x22,20   # XK_F4\x0aNUM  r0m0 = 20,\x22FFC2\x22,20   # XK_F5\x0aNUM  r0l0 = 20,\x22FFC3\x22,20   # XK_F6\x0aNUM  r00r = 20,\x22FFC4\x22,20   # XK_F7\x0aNUM  r00m = 20,\x22FFC5\x22,20   # XK_F8\x0aNUM  r00l = 20,\x22FFC6\x22,20   # XK_F9\x0aNUM  rrr0 = 20,\x22FFC7\x22,20   # XK_F10\x0aNUM  rmm0 = 20,\x22FFC8\x22,20   # XK_F11\x0aNUM  rll0 = 20,\x22FFC9\x22,20   # XK_F12\x0a\x0a# I feel like I should throw these in somewhere so here they are:\x0a\x0anum   00mm = CAPS_LOCK\x0anum   00rr = NUM_LOCK\x0anum   00ll = SCROLL_LOCK\x0a";
}, function($ctx1) {$ctx1.fill(self,"keyConfiguration",{},smalltalk.TwiddlerKeypad)})},
args: [],
source: "keyConfiguration\x0a\x09^ '# The TabSpace Twiddler Keymap\x0a\x0a# Brandon Craig Rhodes http://www.rhodesmill.org/brandon\x0a# Version 0.3, Monday 15 November 1999\x0a# May be shared and modified if credited\x0a\x0a# The three top buttons map to the most frequently used keys.  Note\x0a# that in sane command line environments (those that support\x0a# completions), tab is used nearbyly as much as backspace and both are\x0a# often used many times per line (so we make them more convenient than\x0a# a carriage return).\x0a\x0a0     r000 = BACKSPACE\x0a0     m000 = 32\x0a0     l000 = TAB\x0a\x0a# Next are the nine most common letters, which can each be produced\x0a# with a single keypress.  They are carefully arranged so that the\x0a# most common combinations of them can be pressed simultaneously to\x0a# produce double letters.  In each case the double letter combinations\x0a# output their two constituent letters in the most common order\x0a# (though with some such as er-re it was a close call).  The doubles\x0a# can be expected to account for roughly one-third of the adjacent\x0a# letter pairs in normal English text!\x0a\x0a0     m000 = \x22 \x22\x0a0     0m00 = \x22e\x22\x0a0     00m0 = \x22t\x22\x0a0     000m = \x22h\x22\x0a0     0l00 = \x22o\x22\x0a0     00l0 = \x22r\x22\x0a0     000l = \x22s\x22\x0a0     0r00 = \x22i\x22\x0a0     00r0 = \x22n\x22\x0a0     000r = \x22a\x22\x0a\x0a# 0     0r0r = \x22ai\x22\x0a# 0     0r0m = \x22hi\x22\x0a# 0     0r0l = \x22is\x22\x0a# 0     0rr0 = \x22in\x22\x0a# 0     0rm0 = \x22it\x22\x0a# 0     0rl0 = \x22ri\x22\x0a# 0     0m0r = \x22ea\x22\x0a# 0     0m0m = \x22he\x22\x0a# 0     0m0l = \x22es\x22\x0a# 0     0mr0 = \x22en\x22\x0a# 0     0mm0 = \x22te\x22\x0a# 0     0ml0 = \x22er\x22\x0a# 0     0l0r = \x22oa\x22\x0a# 0     0l0m = \x22ho\x22\x0a# 0     0l0l = \x22so\x22\x0a# 0     0lr0 = \x22on\x22\x0a# 0     0lm0 = \x22to\x22\x0a# 0     0ll0 = \x22or\x22\x0a# 0     00rr = \x22an\x22\x0a# 0     00rm = \x22hn\x22\x0a# 0     00rl = \x22ns\x22\x0a# 0     00mr = \x22at\x22\x0a# 0     00mm = \x22th\x22\x0a# 0     00ml = \x22st\x22\x0a# 0     00lr = \x22ar\x22\x0a# 0     00lm = \x22hr\x22\x0a# 0     00ll = \x22rs\x22\x0a\x0a# Every other letter is produced by pressing the top middle button\x0a# (the spacebar) and some combination of the lower keys.  It is\x0a# expected that during normal typing the index finger will stay on the\x0a# spacebar.  A few combinations that involve these second-tier letters\x0a# are also supported.\x0a\x0a0     mm00 = \x22d\x22\x0a0     m0m0 = \x22l\x22\x0a0     m00m = \x22m\x22\x0a0     mr00 = \x22c\x22\x0a0     m0r0 = \x22f\x22\x0a0     m00r = \x22g\x22\x0a0     ml00 = \x22u\x22\x0a0     m0l0 = \x22w\x22\x0a0     m00l = \x22y\x22\x0a0     mmm0 = \x22p\x22\x0a0     m0mm = \x22k\x22\x0a0     mrr0 = \x22b\x22\x0a0     m0rr = \x22j\x22\x0a0     mll0 = \x22v\x22\x0a0     m0ll = \x22x\x22\x0a0     mm0m = \x22q\x22\x0a0     ml0l = \x22z\x22\x0a\x0a#0     mlr0 = \x22of\x22\x0a#0     mmr0 = \x22nd\x22\x0a#0     mr0m = \x22ch\x22\x0a#0     ml0m = \x22qu\x22\x0a#0     m0lm = \x22wh\x22\x0a\x0a# Finally, we support some three-letter combinations.  As above, note\x0a# that they are produced simply by pressing all of their letters\x0a# simulateously.\x0a\x0a# 0     0mmm = \x22the\x22\x0a# 0     0rrr = \x22ain\x22\x0a# 0     0mlr = \x22are\x22\x0a# 0     mrrr = \x22ing\x22\x0a# 0     mmrr = \x22and\x22\x0a# 0     mlrr = \x22ong\x22\x0a\x0a# As everyone knows, keypads are supposed to be three by three.\x0a\x0a0     rr00 = \x221\x22\x0a0     rm00 = \x222\x22\x0a0     rl00 = \x223\x22\x0a0     r0r0 = \x224\x22\x0a0     r0m0 = \x225\x22\x0a0     r0l0 = \x226\x22\x0a0     r00r = \x227\x22\x0a0     r00m = \x228\x22\x0a0     r00l = \x229\x22\x0a0     rrr0 = \x220\x22\x0a0     rmm0 = \x22.\x22\x0a0     rll0 = \x22-\x22\x0a\x0a# Below the number keypad we place three tiers of mathematical\x0a# operators and symbols.  First come the arithmetic operators, which\x0a# we cascade off of the minus sign.\x0a\x0a0     rlm0 = \x22+\x22\x0a0     rlr0 = \x22^\x22\x0a0     rl0l = \x22/\x22\x0a0     rl0m = \x22*\x22\x0a0     rl0r = \x22%\x22\x0a\x0a# The middle tier of operators include those usually used for logic\x0a# operations.\x0a\x0a0     rmr0 = \x22&\x22\x0a0     rml0 = \x22|\x22\x0a0     rm0m = \x22~\x22\x0a0     rm0r = \x22^\x22\x0a\x0a# The double key combinations along the bottom two rows\x0a# produce the comparitive operators.  Note that the greater than and\x0a# less than symbols, which we also use as angle brackets, are in\x0a# positions similar to all other brackets (see below).\x0a\x0a0     r0rr = \x22<\x22\x0a0     r0mm = \x22>\x22\x0a0     r0ll = \x22=\x22\x0a\x0a# The last major section involves punctuation.  The period, comma, and\x0a# enter key are both intended to be very easy to press.  The semicolon\x0a# is of course produced by pressing period and comma simultaneously.\x0a# Quotes and brackets are also available here.\x0a\x0a0     ll00 = \x22.\x22\x0a0     lll0 = \x22;\x22\x0a0     l0l0 = \x22,\x22\x0a0     l0ll = \x22:\x22\x0a0     l00l = 34\x09\x09# quotation mark\x0a0     l00m = \x22\x22\x0a0     l00r = \x22`\x22\x0a0     mmmm = 13,10 # ENTER\x0a0     lr00 = \x22-\x22\x0a0     lrr0 = \x22[\x22\x0a0     lmm0 = \x22]\x22\x0a0     l0r0 = \x22(\x22\x0a0     l0m0 = \x22)\x22\x0a0     l0rr = \x22{\x22\x0a0     l0mm = \x22}\x22\x0a\x0a# Now that we have exhausted the same-row combinations of the lower\x0a# three keys, we place two more echelons of symbols: one of textual\x0a# punctuation, and the other of more obscure symbols more often\x0a# encountered in programming (and computer typesetting).  People who\x0a# use such keys exceedingly often may have cause to be upset with me.\x0a\x0a0     llm0 = \x22?\x22\x0a0     llr0 = \x22!\x22\x0a0     ll0l = \x22$\x22\x0a0     ll0m = \x22#\x22\x0a0     ll0r = \x22~\x22\x0a0     llll = \x22@\x22\x0a0     llmm = \x22&\x22\x0a\x0a0     lmr0 = \x22/\x22\x0a0     lml0 = \x22\x5c\x5c\x22\x0a0     lm0m = \x22_\x22\x0a0     lm0r = \x22%\x22\x0a\x0a# The FN modifier has no useful native function under X-windows\x0a# (unlike the Shift, CTRL, and ALT modifiers), so we use it for useful\x0a# keystrokes that need to be easy to get to.  Hitting single keys with\x0a# FUNC give an arrow key rose and other screen navigation sequences.\x0a# This is also where we put important codes like Escape, Delete, Null,\x0a# and Linefeed.\x0a\x0aNUM  r000 = 127            # func + BACKSPACE = delete (ascii rubout)\x0aNUM  m000 = NULL           # func + SPACE = null\x0aNUM  l000 = ESCAPE         # func + TAB = ESCAPE\x0aNUM  lm00 = 10             # func + ENTER = linefeed\x0aNUM  0m00 = 20,\x22FF52\x22,20   # XK_Up\x0aNUM  00m0 = 20,\x22FF54\x22,20   # XK_Down\x0aNUM  0r00 = 20,\x22FF51\x22,20   # XK_Left\x0aNUM  0l00 = 20,\x22FF53\x22,20   # XK_Right\x0aNUM  00r0 = 20,\x22FF55\x22,20   # XK_Page_Up\x0aNUM  000r = 20,\x22FF56\x22,20   # XK_Page_Down\x0aNUM  00l0 = 20,\x22FF95\x22,20   # XK_Home\x0aNUM  000l = 20,\x22FF9C\x22,20   # XK_End\x0aNUM  000m = 20,\x22FF9E\x22,20   # XK_Insert\x0a\x0a# FUNC + keypad produces function keys.\x0a\x0aNUM  rr00 = 20,\x22FFBE\x22,20   # XK_F1\x0aNUM  rm00 = 20,\x22FFBF\x22,20   # XK_F2\x0aNUM  rl00 = 20,\x22FFC0\x22,20   # XK_F3\x0aNUM  r0r0 = 20,\x22FFC1\x22,20   # XK_F4\x0aNUM  r0m0 = 20,\x22FFC2\x22,20   # XK_F5\x0aNUM  r0l0 = 20,\x22FFC3\x22,20   # XK_F6\x0aNUM  r00r = 20,\x22FFC4\x22,20   # XK_F7\x0aNUM  r00m = 20,\x22FFC5\x22,20   # XK_F8\x0aNUM  r00l = 20,\x22FFC6\x22,20   # XK_F9\x0aNUM  rrr0 = 20,\x22FFC7\x22,20   # XK_F10\x0aNUM  rmm0 = 20,\x22FFC8\x22,20   # XK_F11\x0aNUM  rll0 = 20,\x22FFC9\x22,20   # XK_F12\x0a\x0a# I feel like I should throw these in somewhere so here they are:\x0a\x0anum   00mm = CAPS_LOCK\x0anum   00rr = NUM_LOCK\x0anum   00ll = SCROLL_LOCK\x0a'",
messageSends: [],
referencedClasses: []
}),
smalltalk.TwiddlerKeypad);

smalltalk.addMethod(
smalltalk.method({
selector: "keys",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@keys"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"keys",{},smalltalk.TwiddlerKeypad)})},
args: [],
source: "keys\x0a\x09^ keys.",
messageSends: [],
referencedClasses: []
}),
smalltalk.TwiddlerKeypad);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(".keypad"._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.TwiddlerKeypad)})},
args: [],
source: "remove\x0a\x09\x22removes all classes of .keypad from the DOM.\x22\x0a\x0a\x09'.keypad' asJQuery remove.",
messageSends: ["remove", "asJQuery"],
referencedClasses: []
}),
smalltalk.TwiddlerKeypad);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$4,$2;
$1=_st(html)._div();
_st($1)._class_("keypad");
_st($1)._style_("float: left");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._style_(".keypad .border {\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09\x09border: 1px solid black;\x0a\x09\x09\x09\x09\x09border-radius: 10px; \x0a\x09\x09\x09\x09\x09width: 140px; height: 260px;\x0a\x09\x09\x09\x09\x09position: relative;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.keypad .mod-button {\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09\x09position: absolute;\x0a\x09\x09\x09\x09\x09border: 1px solid gray;\x0a\x09\x09\x09\x09\x09height: 20px;\x0a\x09\x09\x09\x09\x09width: 20px;\x0a\x09\x09\x09\x09\x09border-radius: 10px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.keypad .key {\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09\x09position: absolute;\x0a\x09\x09\x09\x09\x09border: 1px solid black;\x0a\x09\x09\x09\x09\x09height: 20px;\x0a\x09\x09\x09\x09\x09width: 20px;\x0a\x09\x09\x09\x09\x09border-radius: 4px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.keypad .key.pressed {\x0a\x09\x09\x09\x09\x09background-color: black;\x0a\x09\x09\x09\x09\x09color: white;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09");
$3=_st(html)._div();
_st($3)._class_("border");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._div();
_st($5)._class_("mod-button");
$6=_st($5)._style_("left: 20px; top: 40px;");
$6;
$7=_st(html)._div();
_st($7)._class_("mod-button");
$8=_st($7)._style_("left: 40px; top: 20px;");
$8;
$9=_st(html)._div();
_st($9)._class_("mod-button");
$10=_st($9)._style_("left: 80px; top: 20px;");
$10;
$11=_st(html)._div();
_st($11)._class_("mod-button");
$12=_st($11)._style_("left: 100px; top: 40px;");
$12;
return (1)._to_do_((4),(function(row){
return smalltalk.withContext(function($ctx4) {
return _st(_st(self["@columns"])._values())._do_((function(col){
return smalltalk.withContext(function($ctx5) {
$13=_st(html)._div();
_st($13)._class_("key");
$14=_st($13)._style_(_st(_st(_st("left:".__comma(_st((20).__plus(_st(_st(col).__minus((1))).__star((40))))._asString())).__comma("px; top:")).__comma(_st((100).__plus(_st(_st(row).__minus((1))).__star((40))))._asString())).__comma("px"));
return _st(_st(self["@keys"])._at_ifAbsent_(row,"Flo"))._at_put_(col,$14);
}, function($ctx5) {$ctx5.fillBlock({col:col},$ctx4,4)})}));
}, function($ctx4) {$ctx4.fillBlock({row:row},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self["@root"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TwiddlerKeypad)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22Draw the keypad\x22\x0a\x0a\x09root := html div\x0a\x09\x09class: 'keypad' ;\x0a\x09\x09style: 'float: left';\x0a\x09\x09with: [\x0a\x09\x09\x09html style: \x0a\x09\x09\x09\x09'.keypad .border {\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09\x09border: 1px solid black;\x0a\x09\x09\x09\x09\x09border-radius: 10px; \x0a\x09\x09\x09\x09\x09width: 140px; height: 260px;\x0a\x09\x09\x09\x09\x09position: relative;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.keypad .mod-button {\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09\x09position: absolute;\x0a\x09\x09\x09\x09\x09border: 1px solid gray;\x0a\x09\x09\x09\x09\x09height: 20px;\x0a\x09\x09\x09\x09\x09width: 20px;\x0a\x09\x09\x09\x09\x09border-radius: 10px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.keypad .key {\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09\x09position: absolute;\x0a\x09\x09\x09\x09\x09border: 1px solid black;\x0a\x09\x09\x09\x09\x09height: 20px;\x0a\x09\x09\x09\x09\x09width: 20px;\x0a\x09\x09\x09\x09\x09border-radius: 4px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.keypad .key.pressed {\x0a\x09\x09\x09\x09\x09background-color: black;\x0a\x09\x09\x09\x09\x09color: white;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09'.\x0a\x09\x09\x09\x09\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'border'; \x0a\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09html div class: 'mod-button'; style: 'left: 20px; top: 40px;'.\x0a\x09\x09\x09\x09\x09html div class: 'mod-button'; style: 'left: 40px; top: 20px;'.\x0a\x09\x09\x09\x09\x09html div class: 'mod-button'; style: 'left: 80px; top: 20px;'.\x0a\x09\x09\x09\x09\x09html div class: 'mod-button'; style: 'left: 100px; top: 40px;'.\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x091 to: 4 do: [:row |  \x0a\x09\x09\x09\x09\x09\x09columns values do: [:col |\x0a\x09\x09\x09\x09\x09\x09\x09(keys at: row ifAbsent: 'Flo') at: col put: (html div class: 'key'; style: 'left:', ((20 + (col - 1 * 40)) asString), 'px; top:',  ((100 + (row - 1 * 40)) asString) , 'px').\x0a\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09].\x0a\x09\x09].\x0a\x09\x09",
messageSends: ["class:", "div", "style:", "with:", "to:do:", "do:", "values", "at:put:", "at:ifAbsent:", ",", "asString", "+", "*", "-"],
referencedClasses: []
}),
smalltalk.TwiddlerKeypad);

smalltalk.addMethod(
smalltalk.method({
selector: "showChord:",
category: 'not yet classified',
fn: function (chord){
var self=this;
var row,col;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._clearChord();
_st(chord)._withIndexDo_((function(letter,index){
return smalltalk.withContext(function($ctx2) {
$1=_st(letter).__eq_eq("0");
if(! smalltalk.assert($1)){
col=_st(self["@columns"])._at_(letter);
col;
row=index;
row;
return _st(_st(_st(_st(self["@keys"])._at_(row))._at_(col))._asJQuery())._addClass_("pressed");
};
}, function($ctx2) {$ctx2.fillBlock({letter:letter,index:index},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showChord:",{chord:chord,row:row,col:col},smalltalk.TwiddlerKeypad)})},
args: ["chord"],
source: "showChord: chord\x0a\x09\x22I highlight the buttons of the chord. Chord string format is top-to-bottom 'm0rl'\x22\x0a\x09\x0a\x09| row col | \x0a\x09\x0a\x09self clearChord.\x0a\x09\x0a\x09chord withIndexDo: [:letter :index |\x0a\x09\x09\x09\x0a\x09\x09letter == '0' ifFalse:[\x0a\x09\x09\x09col := columns at: letter.\x0a\x09\x09\x09row := index.\x0a\x09\x09\x09\x0a\x09\x09\x09((keys at: row) at: col) asJQuery addClass: 'pressed'.\x0a\x09\x09]\x0a\x09]\x0a\x09",
messageSends: ["clearChord", "withIndexDo:", "ifFalse:", "==", "at:", "addClass:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TwiddlerKeypad);

smalltalk.addMethod(
smalltalk.method({
selector: "showChordFor:",
category: 'not yet classified',
fn: function (keySequence){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._showChord_(self._chordFor_(keySequence));
return self}, function($ctx1) {$ctx1.fill(self,"showChordFor:",{keySequence:keySequence},smalltalk.TwiddlerKeypad)})},
args: ["keySequence"],
source: "showChordFor: keySequence\x0a\x09\x22I visually display a chord for the given letter or letter sequence\x22\x0a\x09\x0a\x09self showChord: (self chordFor: keySequence).",
messageSends: ["showChord:", "chordFor:"],
referencedClasses: []
}),
smalltalk.TwiddlerKeypad);


smalltalk.TwiddlerKeypad.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#tutor"._asJQuery())._empty();
self["@instance"]=self._new();
self._appendToJQuery_("#tutor"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.TwiddlerKeypad.klass)})},
args: [],
source: "begin\x0a\x09\x22create the button, keypad and lesson and embed them into the page\x22\x0a\x0a\x09'#tutor' asJQuery empty.\x0a\x09\x0a\x09instance := self new.\x0a\x09\x0a\x09self appendToJQuery: '#tutor' asJQuery.",
messageSends: ["empty", "asJQuery", "new", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.TwiddlerKeypad.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@instance"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.TwiddlerKeypad.klass)})},
args: [],
source: "instance\x0a\x09^ instance",
messageSends: [],
referencedClasses: []
}),
smalltalk.TwiddlerKeypad.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._with_(_st(html)._button());
_st($1)._with_("Recreate App");
$2=_st($1)._click_show_($Transcript(),"clicked");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TwiddlerKeypad.klass)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22render the whole application\x22\x0a\x0a\x09html div \x0a\x09\x09with: html button; \x0a\x09\x09\x09with: 'Recreate App';\x0a\x09\x09\x09click: Transcript show: 'clicked'.\x0a\x09\x09\x09",
messageSends: ["with:", "div", "button", "click:show:"],
referencedClasses: ["Transcript"]
}),
smalltalk.TwiddlerKeypad.klass);

});
