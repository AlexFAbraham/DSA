CREATE OR ALTER PROCEDURE delete_user
@username NVARCHAR(255)
AS
DELETE 
FROM users
    WHERE username = @username;
GO



