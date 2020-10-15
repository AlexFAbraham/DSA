CREATE TABLE users(
    ID                  INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
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


