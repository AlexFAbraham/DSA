CREATE OR ALTER PROCEDURE  reset_password
@new_password VARCHAR(255),
@username VARCHAR(255)
AS
UPDATE users
SET user_password = @new_password
WHERE username = @username;
GO