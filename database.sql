create database tutora;

create table enquiryform(
    enquiry_id serial primary key,
    name varchar(50),
    email varchar(50),
    question varchar(200)
);

create table users(
    user_id uuid default uuid_generate_v4(),
    name varchar(50) not null,
    email varchar(50) not null unique,
    password varchar(200) not null,
    primary key (user_id)
);

create table gigs(
    gig_id uuid default uuid_generate_v4(),
    created_at date not null,
    user_id varchar(100) not null unique,
    name varchar(50) not null,
    email varchar(50) not null unique,
    subject varchar(20) not null,
    qualifications varchar(50) not null,
    description varchar(500) not null,
    online boolean not null,
    fee float not null,
    primary key (gig_id)
);