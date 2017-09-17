# Sample State

```
{
  entities: {
    users: {
      11: {
        id: 11,
        username: "ckane",
        fname: "Cory",
        lname: "Kane"
      }
    },
    projects {
      2: {
        id: 2,
        title: "My Awesome Project",
        desc: "Making great things happen",
        author_id: 11
      }
    },
    todos {
      1 {
        id: 1,
        title: "My Cool Todo"
        body: "Todo description"
        author_id: 11
        project_id: 2
      }
    }
    messages {
      32: {
        id: 32,
        title: "My Announcement",
        body: "My Announcement Body"
        project_id: 2
        author_id: 22
      }
    }
    comments {
      146: {
        id: 146,
        body: "My insightful comment",
        message_id: 32,
        author_id: 2
      }
    }
    schedule {
      3: {
        id: 3,
        eventTitle: "My Big Event"
        eventBody: "Details for my big event"
        startDate: "September 30"
        endDate: "September 31"
        author_id: 11,
        project_id: 2
      }
    },
    ui: {
    loading: true/false
    },
    errors: {
      login: ["Incorrect username/password combination"],
      Form: ["Form cannot be blank"],
    },
    session: {
      currentUser: {
        id: 11,
        username: "ckane",
        fname: "Cory",
        lname: "Kane"
      }
    }
  }
}
```
