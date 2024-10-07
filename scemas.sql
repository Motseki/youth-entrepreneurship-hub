CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role ENUM('entrepreneur', 'mentor', 'admin') NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE EntrepreneurProfile (
    entrepreneur_id INT PRIMARY KEY,
    business_name VARCHAR(100) NOT NULL,
    description TEXT,
    location VARCHAR(100),
    stage ENUM('idea', 'startup', 'growth') NOT NULL,
    website VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (entrepreneur_id) REFERENCES User(user_id) ON DELETE CASCADE
);

CREATE TABLE MentorProfile (
    mentor_id INT PRIMARY KEY,
    expertise VARCHAR(100),
    bio TEXT,
    availability VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (mentor_id) REFERENCES User(user_id) ON DELETE CASCADE
);

CREATE TABLE FundingOpportunity (
    funding_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    amount DECIMAL(10, 2) NOT NULL,
    application_deadline DATETIME NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE MarketOpportunity (
    market_opportunity_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    location VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE MentorshipSession (
    session_id INT AUTO_INCREMENT PRIMARY KEY,
    entrepreneur_id INT,
    mentor_id INT,
    session_date DATETIME NOT NULL,
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (entrepreneur_id) REFERENCES EntrepreneurProfile(entrepreneur_id) ON DELETE CASCADE,
    FOREIGN KEY (mentor_id) REFERENCES MentorProfile(mentor_id) ON DELETE CASCADE
);

CREATE TABLE Applications (
    application_id INT AUTO_INCREMENT PRIMARY KEY,
    entrepreneur_id INT,
    funding_id INT,
    status ENUM('pending', 'accepted', 'rejected') NOT NULL,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (entrepreneur_id) REFERENCES EntrepreneurProfile(entrepreneur_id) ON DELETE CASCADE,
    FOREIGN KEY (funding_id) REFERENCES FundingOpportunity(funding_id) ON DELETE CASCADE
);