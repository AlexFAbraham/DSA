/*
Insert into general table query
*/
CREATE OR ALTER PROCEDURE new_user
 @username NVARCHAR(255),
 @user_password NVARCHAR(255),
 @f_name NVARCHAR(255),
 @m_initial NVARCHAR(255),
 @l_name NVARCHAR(255),
 @email NVARCHAR(255),
 @phone_number NVARCHAR(255),
 @major NVARCHAR(255),
 @scholastic_year NVARCHAR(255),
 @roleID INT 
 AS /*
DECLARE @username NVARCHAR(255);
DECLARE @user_password NVARCHAR(255);
DECLARE @f_name NVARCHAR(255);
DECLARE @m_initial NVARCHAR(255);
DECLARE @l_name NVARCHAR(255);
DECLARE @email NVARCHAR(255);
DECLARE @phone_number NVARCHAR(255);
DECLARE @major NVARCHAR(255);
DECLARE @scholastic_year NVARCHAR(255);
DECLARE @roleID INT;
*/

INSERT INTO [dbo].[users](username, user_password, f_name,m_initial,l_name, email, phone_number, major, scholastic_year, roleID)
VALUES (@username, @user_password, @f_name, @m_initial,@l_name, @email, @phone_number, @major, @scholastic_year, @roleID);
GO

EXEC new_user @username = 'aiboro', @user_password = 'Admin789', @f_name= 'Agapitus', @m_initial='',
     @l_name='Iboro',@email= 'aiboro@ggc.edu',  @phone_number= '(123)456-7890', @major ='Software Development',
     @scholastic_year = 'Senior', @roleID = 3;

     SELECT * FROM users;