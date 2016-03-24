# Get feedback from your users!

If you're like me, you love to release your new websites to beta testers way
too early. An important aspect of this, however, is to get feedback from your
users.

This application adds a configurable feedback module to your site, that gets
you feedback _right away_!

## What's included?

You get a feedback prompt (which you can style yourself, or leave it up to us),
and a feedback form part, which you can put wherever you want. Simple!

## Setup

Setting up the application is pretty simple. This is a comprehensive guide on
how to install and set up the application on your site.

### Step 1: Installation

[Download the `.jar` file from Bintray](https://bintray.com/artifact/download/selbekk/maven/io/selbekk/feedback/1.0.0/feedback-1.0.0.jar)
and install the application via your Enonic installation's Application panel.
In the future, the application will hopefully also be available in the
[Enonic Market](https://market.enonic.com/), but not quite yet.

### Step 2: Apply to your site

In the Content Studio, double-click your site to enter the Edit mode. Under
"Applications", search for "Feedback" and click it. The feedback application
should now show up below your site's application, and turn red. That's okay,
we just need to set up some configuration!

### Step 3: Configure

While still editing your site, click the Edit-button next to the Feedback
application. You'll be presented with a few options, which will be explained
below:

#### Layout

The feedback prompt is the thing asking your users whether or not he or she
would like to provide you with their feedback. For now there's only two
choices here - "None" (which lets you implement the design yourself), or
"Bar at the bottom of the screen", which is a very simple design. I suggest you
start out with the latter, so you can see how things work.

#### Theme

The built in design comes with two different themes - "dark" and "light". You
can also choose "None", if you feel like implementing things yourself.

#### Introduction text

The text shown in the feedback prompt, urging your users to leave feedback. A
good text could be "How are we doing?", or perhaps even "What do you think of
our new website?". Get creative, why don't you? ;-)

#### Call to action

The call to action is the button shown to the right of your introduction text,
which will lead your users to your feedback form. You're presented with four
fields:

- **Label** - The text in the button
- **Internal link** - Link to a content on your site (like a page)
- **External link** - An external link, like a link to an external feedback
provider (like SurveyMonkey or Typeform)
- **Appended text** - If you need to add a query parameter

#### Seconds before showing feedback bar

Typically, you don't want the feedback prompt to pop up on page load. Give your
users a few seconds to look at your site before asking them to review it, why
don't you? This value specifies how many seconds you should wait before the
prompt is shown.

#### Days before asking for feedback since last interaction

Typically, we don't ask for feedback on every page load. Instead, we ask for
feedback every x days. This is set with a cookie (so remember to document it in
your cookie policy!), and this is where you specify the expiration time of that
cookie. 10 days? 30 days? You decide.

## The feedback form part

The feedback form part lets you ask for feedback directly in your site, and
can be placed anywhere you want. Put it on a page (i.e "/feedback"), and any
feedback you get will be created as children of that node.

### Configuration

Once you've placed your feedback part, you have to configure it:

#### Layout

As for the feedback prompt, you can also choose between our "basic" design and
"None", which lets you apply your own styles. Either way, you need to choose a
layout before you continue.

#### Heading

The heading of your feedback part. Can be skipped if you want to create this
yourself.

#### Feedback introduction

The text introducing your feedback form. Tell your users how much you
appreciate their feedback, yada yada yada. Keep it to one paragraph though!


#### Fields

Here you can add the fields you want to present your users. Add as many or as
few as you want, but try to keep it simple - users ain't got time foh tons of
fields.

Each field requires you to fill out three things:

- **Field label** - A descriptive label for your field, like "What's your name"
or "What do you think?"
- **Field type** - Choose between text line, e-mail or text area.
- **Required** - Should the field be required?

#### Submit button text

The text on the submit button

#### "Thank you" heading

When the form is submitted, a new screen is shown, thanking your user for
giving some feedback. This is the heading of that screen.

#### "Thank you" text

The text shown below the heading. Sum up why your users are awesome for telling
you how you could improve.
