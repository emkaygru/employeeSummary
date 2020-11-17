# employeeSummary
MSU Web Development Bootcamp

[!Working app Link https://youtu.be/3DRuhwChbyA] 

This CLI application generates and saves an html file based on the user input.

When the application starts the user will be prompted to input the details of a team. The team can have only one manager and any combination of engineers and interns. First the user will enter manager's details, and then the details of all the team members.

After manager's details are input , the user can choose to populate details for new team member or exit the prompt. After the user exits the prompt, the html file will be generated in the /output folder.

The system will get the array of user answers, transform it into array of objects of respective classes (Manager, Engineer or Intern), and then generate an html based on such team array.
