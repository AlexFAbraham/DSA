CREATE OR ALTER PROCEDURE  update_phone_number
@new_phone_number VARCHAR(255),
@username VARCHAR(255)
AS
UPDATE users
SET phone_number = @new_phone_number
WHERE username =  @username;
GO