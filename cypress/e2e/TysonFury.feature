Feature: Search for an article

    Background: Accept cookies
        And New user

    Scenario: Search for Tyson Fury

        Given I am a New User
        And I open thesun.co.uk
        And I search for SearchTerms
        When An article about SearchTerms is found
        Then the article about SearchTerms is opened
        And the article mentions SearchTerms

    Example: Search keywords
            | SearchTerms |
            | Tyson Fury  |