/*
Update User roles
*/
CREATE OR ALTER PROCEDURE set_role
@user VARCHAR(255),
@roleid INT
AS
UPDATE users
SET roleid = @roleid
WHERE username = @user;
GO

