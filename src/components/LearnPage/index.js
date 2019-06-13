import React from "react";
import H1 from "../../styles/H1";
import H2 from "../../styles/H2";
import LearnArticle from "../../styles/LearnArticle";
import YouTube from "react-youtube";

const LearnPage = () => (
  <div>
    <header>
      <H1>Learn More</H1>
    </header>
    <div>
      <YouTube videoId={"g4vQjsSa3uY"} opts={{ width: "100%" }} />
    </div>
    <div>
      <LearnArticle>
        <H2>WHEN SHOULD I FILL OUT AN OUTREACH REQUEST?</H2>
        <p>
          Did you see someone experiencing homelessness who needs help? Notice a
          homeless neighbor who seems to be struggling with their physical
          and/or mental health? Then you can help them by filling out an
          outreach request and alert us as to any specific concerns you may have
          regarding the person’s well-being. As outreach capacity is limited,
          requests for those with more serious medical and/or mental health
          needs may be prioritized.
        </p>
      </LearnArticle>
      <LearnArticle>
        <H2>WHEN SHOULD I NOT FILL OUT AN OUTREACH REQUEST?</H2>
        <p>
          If you come across a family with minor children experiencing
          homelessness, have them call 211 and ask to be connected to the
          Coordinated Entry System for Families. If you are concerned about
          illegal activity, contact your local law enforcement agency. For
          medical and mental health emergencies, call 911. Unfortunately,
          outreach teams are not able to serve individuals who are couch
          surfing, temporarily living with friends or family, at risk of
          homelessness, or already staying in a homeless shelter.
        </p>
      </LearnArticle>
      <LearnArticle>
        <H2>WHAT DO OUTREACH WORKERS DO?</H2>
        <p>
          Outreach workers have many different skills including homeless
          services navigation, mental health first aid, motivational
          interviewing, and trauma informed care, among others. Some teams even
          have physical health, mental health and substance use professionals.
          Outreach teams start by building a trusting relationship with and
          determining the needs of people living on the streets. Their efforts
          can be as simple as helping someone experiencing homelessness get an
          ID card or as complex as helping to meet medical and mental health
          needs. But the ultimate goal of outreach services? To help people who
          are homeless move from the streets into a permanent home.
        </p>
      </LearnArticle>
      <LearnArticle>
        <H2>HOW LONG DOES IT TAKE TO HELP SOMEONE?</H2>
        <p>
          Some people may require significant time to build trust. Others may be
          more readily open to help. Regardless, everything we do is in
          partnership with those we serve, and is done in a way that fosters
          dignity and self-determination. Until there’s more shelter and
          affordable permanent housing, the process to get people indoors is
          slower than we would like. But through the investments of capital
          development funding via Proposition HHH, No Place Like Home, and
          Measure H, there will be an increase in shelter beds and permanent
          housing over time. The commitment of our outreach teams, combined with
          expanded housing opportunities, will make a huge difference.
        </p>
      </LearnArticle>
      <LearnArticle>
        <H2>WHAT DO YOU MEAN BY “HOMELESSNESS”?</H2>
        <p>
          While there are different types of homelessness, street-based outreach
          teams serve those who the U.S. Department of Housing and Urban
          Development considers "literally homeless." This is defined as, "an
          individual that has a primary nighttime residence that is a public or
          private place not meant for human habitation."
        </p>
      </LearnArticle>
      <LearnArticle>
        <H2>WHEN DO OUTREACH WORKERS WORK?</H2>
        <p>
          They usually work during daylight hours due to safety and because this
          allows outreach workers to connect individuals that are homeless to
          resources and other critical services like health and mental health
          services, job training programs, and those offered by the Department
          of Motor Vehicles and Department of Public Social Services.
        </p>
      </LearnArticle>
      <LearnArticle>
        <H2>HOW LONG DOES IT TAKE A TEAM TO RESPOND?</H2>
        <p>
          Due to high demand, it may take a few days for an outreach team to be
          deployed and we may need to prioritize those individuals who are most
          vulnerable. With nearly 40,000 people living on the streets of LA
          County, the need for outreach services is great.
        </p>
      </LearnArticle>
      <LearnArticle>
        <H2>CAN I GET AN UPDATE ON  WHAT HAPPENED?</H2>
        <p>
          If you provide your email address, we will let you know we received
          your request and when it was fulfilled. We are required by law to
          protect the privacy of those we serve…therefore we are unable to share
          updates (unless the client allows us to). However, if you agree to be
          contacted, we may reach out to you to ask additional questions that
          will help us locate and connect with the person referred.
        </p>
      </LearnArticle>
      <LearnArticle>
        <H2>HOW ELSE CAN I HELP MY HOMELESS NEIGHBORS?</H2>
        <p>
          Volunteering and donating to organizations serving people experiencing
          homelessness is a great way to help the cause. Please go to
          TheyCountWillYou.org, Volunteer Opportunities, Everyone In,
          VolunteerLA, or contact your local homeless organization for further
          information on volunteering and/or donating towards ending
          homelessness.
        </p>
      </LearnArticle>
      <LearnArticle>
        <H2>WHAT IS MEASURE H AND PROPOSITION HHH?</H2>
        <p>
          Measure H is a County of Los Angeles special sales tax increase passed
          by the voters in 2017 that specifically funds services, shelter, and
          permanent rental subsidies for people experiencing homelessness.
          Proposition HHH is a City of Los Angeles bond passed by the voters in
          2016 that directly funds the building of new affordable permanent
          housing for people experiencing homelessness.
        </p>
      </LearnArticle>
    </div>
  </div>
);

export default LearnPage;
