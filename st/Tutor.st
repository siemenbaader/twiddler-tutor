Smalltalk current createPackage: 'Tutor'!
Widget subclass: #Tutor
	instanceVariableNames: 'count header root'
	package: 'Tutor'!

!Tutor methodsFor: 'not yet classified'!

remove
	"removes itself from the DOM"

	root asJQuery detach.
!

renderOn: html
	"Draw the keypad"

	root := html div
		id: 'keypad';
		style: 'border: 1px solid black; border-radius: 10px; width: 120px; height: 220px;' ;
		with: [ 
			html div with: [
			
				html button with: ''.
				html button with: ''.
				html button with: ''.
			]
		].
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
! !

