CREATE OR ALTER PROCEDURE  update_name
@new_f_name VARCHAR(255),
@username VARCHAR(255)
AS
UPDATE users
SET f_name = @new_f_name
WHERE username = @username;
GO