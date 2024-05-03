# Task Manager - Full Stack Application

Uses Postgres, Node.js and React.js.

# Backend

The backend uses REST and follows a Model-Routes-Controller pattern which allows for better separation of concerns and strong code maintenance. This framework has become an industry standard and one that I've adopted over the years. I'm a big fan of it, and so I decided to implement it in this assignment.

Regarding it's endpoints, there are are four main ones which cover all of our business use cases:

- GET /tasks (retrieves all tasks)
- GET /tasks/:id (retrieves task via id)
- POST /tasks/create (creates a task)
- PUT /tasks/update/:id (updates a task)

I believe all HTTP methods follow their specifications except for maybe PUT. PUT is used to replace an entire resource, but PATCH updates it partially. A really small design issue that doesn't affect the overall system, but it's good to point out.

Overall, while the backend is slightly opinionated on its structure, by following certain principles, it prevents "spaghetti code" from being produced and provides a maintainable codebase.

### Further Improvements
The database config file does not use the .env file. I personally just didn't have enough time but would like to outline this fault.

I could have possibly used an ORM, considering the simplicity of the business use cases. However, barebones SQL avoids abstraction wherever possible and allows for flexible control over the code. Using abstractions can lead to inefficient queries if you don't know what's underneath the hood!

# Frontend

I initially planned to have all business use cases fit into one page. However, this would have led to multiple states congregating into one component and kicking off their side effects. So I decided to decouple them into three main pages:

- Home Page 
- Create Task page
- Update Task Page

This allowed for better state management and organisation of the code as well.

Also, the styling is very barebones, and the main reasoning for that is running out of time. Most of my time was completing the user stories. However, if you're concerned about my CSS skills, you can check out my personal website https://jamesdang.netlify.app/. I coded this from scratch and made all the styles myself (This was created before ChatGPT as well).

If I maybe had an extra day or so, I would have had time to style it more.

### Further Improvements
There is bug where if you edit a task with an existing date, it would not display it on the frontend. I would have fixed it but it was not a priority for me. Getting a working Docker run blocked me from continuing to resolve this issue.

Proper form validation instead of alerting at the top. I did this to improve the development time, but in the real world, I would have implemented form validation.


# Version Control: Git

My git commit history was not of priority, given the time constraint. New ideas would rush in to solve the problem, and so I could not allocate time for better organisation. 

However, you will be able to see my gradual progress of the whole project through my commits.

# Contact Me
If you have any questions or concerns about my project, feel free to reach out to me via my email jamesphidang@gmail.com.
