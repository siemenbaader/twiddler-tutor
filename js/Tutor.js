define("tutor/Tutor", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('Tutor');
smalltalk.packages["Tutor"].transport = {"type":"amd","amdNamespace":"tutor"};

smalltalk.addClass('Tutor', smalltalk.Widget, ['count', 'header', 'root', 'keys', 'l', 'm', 'r'], 'Tutor');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@l"]=(1);
self["@m"]=(2);
self["@r"]=(3);
self["@keys"]=_st($Array())._new();
(4)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@keys"])._add_(_st($Array())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Tutor)})},
args: [],
source: "initialize\x0a\x09\x22comment stating purpose of message\x22\x0a\x09l := 1.\x0a\x09m := 2.\x0a\x09r := 3.\x0a\x09keys := Array new.\x0a\x094 timesRepeat:[keys add: Array new.].",
messageSends: ["new", "timesRepeat:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.Tutor);

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
}, function($ctx1) {$ctx1.fill(self,"keys",{},smalltalk.Tutor)})},
args: [],
source: "keys\x0a\x09^ keys.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tutor);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@root"])._asJQuery())._detach();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.Tutor)})},
args: [],
source: "remove\x0a\x09\x22removes itself from the DOM\x22\x0a\x0a\x09root asJQuery detach.",
messageSends: ["detach", "asJQuery"],
referencedClasses: []
}),
smalltalk.Tutor);

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
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._style_(".keypad .border {\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09\x09border: 1px solid black;\x0a\x09\x09\x09\x09\x09border-radius: 10px; \x0a\x09\x09\x09\x09\x09width: 140px; height: 260px;\x0a\x09\x09\x09\x09\x09position: relative;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.keypad .mod-button {\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09\x09position: absolute;\x0a\x09\x09\x09\x09\x09border: 1px solid gray;\x0a\x09\x09\x09\x09\x09height: 20px;\x0a\x09\x09\x09\x09\x09width: 20px;\x0a\x09\x09\x09\x09\x09border-radius: 10px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.keypad .key {\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09\x09position: absolute;\x0a\x09\x09\x09\x09\x09border: 1px solid black;\x0a\x09\x09\x09\x09\x09height: 20px;\x0a\x09\x09\x09\x09\x09width: 20px;\x0a\x09\x09\x09\x09\x09border-radius: 4px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09");
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
return _st(self["@l"])._to_do_(self["@r"],(function(col){
return smalltalk.withContext(function($ctx5) {
$13=_st(html)._div();
_st($13)._class_("key");
$14=_st($13)._style_(_st(_st(_st("left:".__comma((20).__plus(_st(_st(_st(col).__minus((1))).__star((40)))._asString()))).__comma("px; top:")).__comma((100).__plus(_st(_st(_st(row).__minus((1))).__star((20)))._asString()))).__comma("px"));
return _st(_st(self["@keys"])._at_ifAbsent_(row,"Flo"))._at_put_(col,$14);
}, function($ctx5) {$ctx5.fillBlock({col:col},$ctx4,4)})}));
}, function($ctx4) {$ctx4.fillBlock({row:row},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self["@root"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.Tutor)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22Draw the keypad\x22\x0a\x0a\x09root := html div\x0a\x09\x09class: 'keypad' ;\x0a\x09\x09with: [\x0a\x09\x09\x09html style: \x0a\x09\x09\x09\x09'.keypad .border {\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09\x09border: 1px solid black;\x0a\x09\x09\x09\x09\x09border-radius: 10px; \x0a\x09\x09\x09\x09\x09width: 140px; height: 260px;\x0a\x09\x09\x09\x09\x09position: relative;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.keypad .mod-button {\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09\x09position: absolute;\x0a\x09\x09\x09\x09\x09border: 1px solid gray;\x0a\x09\x09\x09\x09\x09height: 20px;\x0a\x09\x09\x09\x09\x09width: 20px;\x0a\x09\x09\x09\x09\x09border-radius: 10px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.keypad .key {\x0a\x09\x09\x09\x09\x09box-sizing: border-box;\x0a\x09\x09\x09\x09\x09position: absolute;\x0a\x09\x09\x09\x09\x09border: 1px solid black;\x0a\x09\x09\x09\x09\x09height: 20px;\x0a\x09\x09\x09\x09\x09width: 20px;\x0a\x09\x09\x09\x09\x09border-radius: 4px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09'.\x0a\x09\x09\x09\x09\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'border'; \x0a\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09html div class: 'mod-button'; style: 'left: 20px; top: 40px;'.\x0a\x09\x09\x09\x09\x09html div class: 'mod-button'; style: 'left: 40px; top: 20px;'.\x0a\x09\x09\x09\x09\x09html div class: 'mod-button'; style: 'left: 80px; top: 20px;'.\x0a\x09\x09\x09\x09\x09html div class: 'mod-button'; style: 'left: 100px; top: 40px;'.\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x091 to: 4 do: [:row |  \x0a\x09\x09\x09\x09\x09\x09l to: r do: [:col |\x0a\x09\x09\x09\x09\x09\x09\x09(keys at: row ifAbsent: 'Flo') at: col put: (html div class: 'key'; style: 'left:', (20 + (col - 1 * 40) asString), 'px; top:',  (100 + (row - 1 * 20) asString) , 'px').\x0a\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09].\x0a\x09\x09].\x0a\x09\x09",
messageSends: ["class:", "div", "with:", "style:", "to:do:", "at:put:", "at:ifAbsent:", ",", "+", "asString", "*", "-"],
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
_st(_st("<button>Re-Create</button>"._asJQuery())._click_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@instance"])._remove();
self["@instance"]=self._new();
self["@instance"];
return _st(self["@instance"])._appendToJQuery_("body"._asJQuery());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})))._appendTo_("body"._asJQuery());
self["@instance"]=self._new();
_st(self["@instance"])._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.Tutor.klass)})},
args: [],
source: "begin\x0a\x09\x22create the keypad and embed it into the page\x22\x0a\x09\x0a\x09('<button>Re-Create</button>' asJQuery click: [\x0a\x09\x09instance remove. \x0a\x09\x09instance := self new.\x0a\x09\x09instance appendToJQuery: 'body' asJQuery. \x0a\x09]) appendTo: 'body' asJQuery.\x0a\x09\x0a\x09instance := self new.\x0a\x09instance appendToJQuery: 'body' asJQuery. ",
messageSends: ["appendTo:", "click:", "asJQuery", "remove", "new", "appendToJQuery:"],
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
source: "instance\x0a\x09^ instance",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tutor.klass);

});
