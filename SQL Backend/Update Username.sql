CREATE OR ALTER PROCEDURE  update_username
@new_username VARCHAR(255),
@username VARCHAR(255)
AS
UPDATE users
SET username = @new_username
WHERE username = @username;
GO