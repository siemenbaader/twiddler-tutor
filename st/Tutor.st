Smalltalk current createPackage: 'Tutor'!
Widget subclass: #Tutor
	instanceVariableNames: 'count header root keys l m r'
	package: 'Tutor'!

!Tutor methodsFor: 'not yet classified'!

initialize
	"comment stating purpose of message"
	l := 1.
	m := 2.
	r := 3.
	keys := Array new.
	4 timesRepeat:[keys add: Array new.].
!

remove
	"removes itself from the DOM"

	root asJQuery detach.
!

renderOn: html
	"Draw the keypad"

	root := html div
		class: 'keypad' ;
		with: [
			html style: 
				'.keypad .border {
					box-sizing: border-box;
					border: 1px solid black;
					border-radius: 10px; 
					width: 140px; height: 260px;
					position: relative;
				}
				
				.keypad .mod-button {
					box-sizing: border-box;
					position: absolute;
					border: 1px solid gray;
					height: 20px;
					width: 20px;
					border-radius: 10px;
				}
				
				.keypad .key {
					box-sizing: border-box;
					position: absolute;
					border: 1px solid black;
					height: 20px;
					width: 20px;
					border-radius: 4px;
				}
				'.
				
			html div 
				class: 'border'; 
				with: [ 
					html div class: 'mod-button'; style: 'left: 20px; top: 40px;'.
					html div class: 'mod-button'; style: 'left: 40px; top: 20px;'.
					html div class: 'mod-button'; style: 'left: 80px; top: 20px;'.
					html div class: 'mod-button'; style: 'left: 100px; top: 40px;'.
					

					(keys at: 1 ifAbsent: 'Flo') at: l put: (html div class: 'key'; style: 'left: 20px; top: 100px').
					(keys at: 1 ifAbsent: 'Flo') at: m put: (html div class: 'key'; style: 'left: 60px; top: 100px').
					(keys at: 1 ifAbsent: 'Flo') at: l put: (html div class: 'key'; style: 'left: 100px; top: 100px').
				].
		].
!

keys
	^ keys.
! !

Tutor class instanceVariableNames: 'instance'!

!Tutor class methodsFor: 'not yet classified'!

begin
	"create the keypad and embed it into the page"
	
	('<button>Re-Create</button>' asJQuery click: [
		instance remove. 
		instance := self new.
		instance appendToJQuery: 'body' asJQuery. 
	]) appendTo: 'body' asJQuery.
	
	instance := self new.
	instance appendToJQuery: 'body' asJQuery.
!

instance
	^ instance
! !

