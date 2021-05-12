insert into carna_user(
    username, email, password, profile_picture)
    values(
        ${username},
        ${email},
        ${hash},
        ${profile_picture}
    )
returning user_id, username, email, profile_picture;