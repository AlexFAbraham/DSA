-- Create a new database called 'DatabaseName'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'DSA'
)
CREATE DATABASE DSA
GO

CREATE TABLE users(
    ID                  INT NOT NULL PRIMARY KEY,
    username            NVARCHAR(255) NOT NULL,
    user_password       NVARCHAR(255) NOT NULL,        
    f_name              NVARCHAR(255) NOT NULL,
    m_initial           NVARCHAR(255) NOT NULL,
    l_name              NVARCHAR(255) NOT NULL,
    email               NVARCHAR(255) NOT NULL,
    phone_number        NVARCHAR(255),
    major               NVARCHAR(255),
    scholastic_year     NVARCHAR(255),
    roleID              INT NOT NULL     
);

CREATE TABLE roles(
    roleID INT NOT NULL,
    role_name  VARCHAR(255) NOT NULL
);

Select *
from users;

insert into users
(ID, username, user_password, f_name, m_initial, l_name, email,
phone_number, major, scholastic_year, roleID)
Values (1, 'aiboro', '12345', 'agapitus', 'AI', 'iboro', 
'aiboro@ggc.edu', '1234567890', 'Software Development', 'Senior', 3);

drop TABLE
users;