Smalltalk current createPackage: 'Tutor'!
Widget subclass: #TwiddlerTutor
	instanceVariableNames: 'count header'
	package: 'Tutor'!
!TwiddlerTutor commentStamp!
This is a trivial Widget example mimicking the classic Counter example in Seaside.
In order to play with it, just evaluate the doit below in a workspace.
Then take a look in the HTML document above the IDE.

		Counter tryExample!

!TwiddlerTutor methodsFor: 'actions'!

decrease
	count := count - 1.
	header contents: [:html | html with: count asString]
!

increase
	count := count + 1.
	header contents: [:html | html with: count asString]
! !

!TwiddlerTutor methodsFor: 'initialization'!

initialize
	super initialize.
	count := 0
! !

!TwiddlerTutor methodsFor: 'rendering'!

renderOn: html
	header := html h1
	with: count asString;
	yourself.
	html button
	with: '++';
	onClick: [self increase].
	html button
	with: '--';
	onClick: [self decrease]
! !

!TwiddlerTutor class methodsFor: 'example'!

tryExample
	"In order to play with the Counter, just select the
	doit below and press the Do it button. Then take a
	look in the HTML document above the IDE."

	"Counter tryExample"
		self new appendToJQuery: 'body' asJQuery
! !

