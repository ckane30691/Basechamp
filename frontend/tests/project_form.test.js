import React from 'react';

const ProjectForm = require('../components/projects/project_form');

test('updates a field', () => {
  console.log(ProjectForm);
  const e = { target: { value: "test"} };
  expect(ProjectForm.update('title', e)).toBe("test");
});
