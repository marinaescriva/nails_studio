

USE `nails_studio`;

insert into roles (id, name) values (1, 'super_admin');
insert into roles (id, name) values (2, 'admin');
insert into roles (id, name) values (3, 'user');


-- create random users 

insert into users (id, name, surname, password, email, role_id) values (1, "super_admin" ,"super_admin", "$2b$08$9I7i43KA7gbWrvgoGtlt3uYAGh3UYYuYgwCiL9Y4c7UR2Y24IZccK" , "super_admin@super_admin.com", 1 );
insert into users (id, name, surname, password, email, role_id) values (2, "admin" , "admin","$2b$08$9I7i43KA7gbWrvgoGtlt3uYAGh3UYYuYgwCiL9Y4c7UR2Y24IZccK" , "admin@admin.com", 2 );
insert into users (id, name, surname, password, email, role_id) values (3, "user" , "user","$2b$08$9I7i43KA7gbWrvgoGtlt3uYAGh3UYYuYgwCiL9Y4c7UR2Y24IZccK" , "user@user.com", 3 );
insert into users (id, name, surname, password, email, role_id) values (4, "Bert" , "Otter","$2b$08$9I7i43KA7gbWrvgoGtlt3uYAGh3UYYuYgwCiL9Y4c7UR2Y24IZccK" , "botter3@canalblog.com", 1 );
insert into users (id, name, surname, password, email, role_id) values (5, "Annalee" , "Loftie","$2b$08$9I7i43KA7gbWrvgoGtlt3uYAGh3UYYuYgwCiL9Y4c7UR2Y24IZccK" , "aloftie4@comsenz.com", 1 );
insert into users (id, name, surname, password, email, role_id) values (6, "Leena" , "Stodd","$2b$08$9I7i43KA7gbWrvgoGtlt3uYAGh3UYYuYgwCiL9Y4c7UR2Y24IZccK" , "lstodd5@apple.com", 3 );
insert into users (id, name, surname, password, email, role_id) values (7, "Veronike" , "Quinn","$2b$08$9I7i43KA7gbWrvgoGtlt3uYAGh3UYYuYgwCiL9Y4c7UR2Y24IZccK" , "vquinn6@adobe.com", 3 );
insert into users (id, name, surname, password, email, role_id) values (8, "Yettie" , "Iacobo","$2b$08$9I7i43KA7gbWrvgoGtlt3uYAGh3UYYuYgwCiL9Y4c7UR2Y24IZccK" , "yiacobo7@free.fr", 3 );
insert into users (id, name, surname, password, email, role_id) values (9, "Taryn" , "Tregien","$2b$08$9I7i43KA7gbWrvgoGtlt3uYAGh3UYYuYgwCiL9Y4c7UR2Y24IZccK" , "ttregien8@desdev.cn", 3 );
insert into users (id, name, surname, password, email, role_id) values (10, "Manon" , "Cordaroy","$2b$08$9I7i43KA7gbWrvgoGtlt3uYAGh3UYYuYgwCiL9Y4c7UR2Y24IZccK" , "mcordaroy9@hao123.com", 2 );
insert into users (id, name, surname, password, email, role_id) values (11, "Elysia" , "Kobel","$2b$08$9I7i43KA7gbWrvgoGtlt3uYAGh3UYYuYgwCiL9Y4c7UR2Y24IZccK" , "ekobela@ted.com", 1 );
insert into users (id, name, surname, password, email, role_id) values (12, "Dorri" , "Attock" ,"$2b$08$9I7i43KA7gbWrvgoGtlt3uYAGh3UYYuYgwCiL9Y4c7UR2Y24IZccK" , "dattockb@cbsnews.com", 2 );
insert into users (id, name, surname, password, email, role_id) values (13, "Alba" , "Perez" ,"$2b$08$9I7i43KA7gbWrvgoGtlt3uYAGh3UYYuYgwCiL9Y4c7UR2Y24IZccK" , "alba@alba.com", 3 );
								

-- create random services


insert into services (id, name, description) values (1, 'semipermanente', 'Uñas semipermanentes sobre base natural de una duración aproximada 15 días. Decoraciones extra.');
insert into services (id, name, description) values (2, 'semigel', 'Uñas semigel con refuerzo sobre uña natural sin extensión. Decoraciones extra.');
insert into services (id, name, description) values (3, 'gel', 'Uñas de gel forma a escoger. Precio en función de su largo. Extras a parte.');
insert into services (id, name, description) values (4, 'retirada', 'Retirada de uñas con diferentes materiales (a consultar)');

-- create random appointments


insert into appointments (id, appointment_date, user_id, service_id) values (1,  '2024-03-04', '1', '2');
insert into appointments (id, appointment_date, user_id, service_id) values (2,  '2024-03-04', '1', '3');
insert into appointments (id, appointment_date, user_id, service_id) values (3,  '2024-03-04', '2', '2');
insert into appointments (id, appointment_date, user_id, service_id) values (4,  '2024-03-04', '2', '4');
insert into appointments (id, appointment_date, user_id, service_id) values (5,  '2024-03-04', '12', '1');
insert into appointments (id, appointment_date, user_id, service_id) values (6,  '2024-03-05', '3', '1');
insert into appointments (id, appointment_date, user_id, service_id) values (7,  '2024-03-05', '4', '3');
insert into appointments (id, appointment_date, user_id, service_id) values (8,  '2024-03-05', '5', '2');
insert into appointments (id, appointment_date, user_id, service_id) values (9,  '2024-03-05', '6', '1');
insert into appointments (id, appointment_date, user_id, service_id) values (10, '2024-03-06', '6', '3');
insert into appointments (id, appointment_date, user_id, service_id) values (11, '2024-03-06', '7', '4');
insert into appointments (id, appointment_date, user_id, service_id) values (12, '2024-03-06', '8', '4');
insert into appointments (id, appointment_date, user_id, service_id) values (13, '2024-03-07', '10', '2');
insert into appointments (id, appointment_date, user_id, service_id) values (14, '2024-03-07', '11', '4');
insert into appointments (id, appointment_date, user_id, service_id) values (15, '2024-03-08', '9', '1');

