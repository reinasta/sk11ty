---
title: Form
layout: 'layouts/base.html'
permalink: '/form/index.html'
---


<article id="registration-form">

<h1>Registration form</h1>

<form action="" method="POST" name="registation-form-uea" data-netlify="true">
  <div class="form-entry">
    <label for="name">Full name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-entry">
    <label for="email">Email address: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-entry">
    <label for="course">Current course: </label>
    <input type="text" name="course" id="course" required>
  </div>
  <div class="form-entry">
    <label for="year">Year of study: </label>
    <input type="text" name="year" id="name" required>
  </div>
  <div class="form-entry">
  <fieldset>
    <legend>Dates</legend>
    <input type="radio" name="radio"> 
    <label>Wednesday, 16th March 2022, from 2-4pm</label>
    <br>
    <input type="radio" name="radio">
    <label>Wednesday, 4th May 2022, from 2-4pm</label>
  </fieldset>
  </div>
  <div class="form-entry">
    <fieldset>
    <legend>Experience of media (optional): </legend>
      <input type="checkbox" id="some-experience" name="some-experience" value="Some">
      <label for="some-experience"> I have some experience (e.g. social media)</label><br>
      <input type="checkbox" id="training" name="training" value="Training">
      <label for="training"> I have some media training</label><br>
      <input type="checkbox" id="word-experience" name="work-experience" value="Work">
      <label for="work-experience"> I have work experience of media</label><br>
      <input type="checkbox" id="no-experience" name="no-expereince" value="None">
      <label for="no-experience"> No experience, really. I'm keen to learn more.</label><br>
    </fieldset>
  </div>
  <div class="form-entry submit-div">
    <input type="submit" value="Subscribe!">
  </div>
</form>

</article>
