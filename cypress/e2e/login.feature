Feature: To check Login Functionality

    Scenario: Login page
        Given PreCondtion
        When Action
        Then Validation

    @smoke
    Scenario: Login scenarion with data parameterization
        Given User open url
        When User enter username "invalid username"
        And User enter password "invalid password"
        And User click signin button
        Then Verify error message