To add a `grade` field to the `ASSIGNMENTS` table in your existing database setup, follow these steps:

### Step to Alter the Table:

1. **Open the SQL Query Tool** in pgAdmin:
   - Navigate to your database, open the Query Tool.

2. **Run the ALTER TABLE Command**:
   - Copy and paste the following SQL command into the SQL Query Tool:
     ```sql
     ALTER TABLE ASSIGNMENTS
     ADD COLUMN GRADE VARCHAR(10);
     ```
   - Click the **Execute (▶) button** or press **F5**.
   - This will add a new column named `GRADE` to the `ASSIGNMENTS` table that can hold a grade as text up to 10 characters long.

### Modify the Documentation for Future Labs:

Starting at the beginning: You will need to update the SQL command in the **Step 4: Create the Tables** section to include the `GRADE` column in the `ASSIGNMENTS` table. The updated command should look like this:

```sql
CREATE TABLE ASSIGNMENTS (
    ASSIGNMENT_ID SERIAL PRIMARY KEY,
    TITLE VARCHAR(100),
    DESCRIPTION TEXT,
    DUE_DATE DATE,
    STUDENT_ID INT REFERENCES STUDENTS(STUDENT_ID),
    GRADE VARCHAR(10)
);
```
