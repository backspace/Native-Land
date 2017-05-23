import React, { Component } from 'react';

class TeacherGuide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" style={{marginTop: '60px'}}>
        <h1>Teacher's Guide</h1>
        <p>Since creating this map, we've recieved a lot of emails from teachers at all levels asking if they can use the map in teaching their students. Of course we would love for people to spread the map around more, but there are some very important things to take into account when using this map.</p>
        <p><strong>First of all, this map must be used critically. Maps function as colonial artifacts and represent a very particular way of seeing the world - a way primarily concerned with ownership, exclusivity, and power relations.</strong></p>
        <p>There are a ton of issues when it comes to using a map like this. And if people do not take these things into account, the map may prove more harmful than valuable.</p>
        <span class="mdl-layout-title">Start a discussion:</span>
        <ul>
          <li>What are the difficulties when it comes to mapping Indigenous territories?</li>
          <li>How does the modern idea of a 'nation-state' relate to Indigenous nations?</li>
          <li>Who defines national boundaries, and who defines a nation?</li>
          <li>What sources are being used, and what biases are in those sources?</li>
          <li>How have colonial maps attempted to disposses Indigenous people of their land?</li>
        </ul>
        <span class="mdl-layout-title">Get feedback:</span>
        <ul>
          <li>Are these maps useful, or do they contribute to colonial ways of thinking about Indigenous people?</li>
          <li>Will your students use this map to learn more about their own history?</li>
          <li>Should these maps be expanded?</li>
        </ul>
        <a class="anchor" name="introduction-guide"></a>
        <h2>Historical Primer</h2>
        <p><i>Shauna Johnson, UBC</i></p>
          <p>In Canada and the United States, there is a long, dire
          history of colonization that has impacted indigenous peoples in many ways.
          While history books highlight famous white explorers and celebrated major
          events such as the discovery of ‘New Lands’, keep in mind that narratives told
          in the text books tell one side of the story; the story that the Europeans, as
          the all ‘superior humans’ chose to put in the history books (King, 2012). </p>
          <p>When we talk about history, we talk about stories of the past.
          These stories have been organized into agreed upon events and interpretations
          that tell how “we” got from here to there. The problem with this is that those
          who held the most power chose the stories that were to become a part of
          history. History is a tool to tell stories about how they became powerful and
          how the powerful use that power to remain in power. So when it comes to the
          oral histories of indigenous peoples, many of the narratives were discounted,
          ignored, and erased from history by altering or not acknowledging the accounts
          of indigenous peoples (Smith, 2012) (King, 2012). </p>
          <p>One reason behind this may originate back to the Papal Bulls
          of discovery, a doctrine in the 15<sup>th</sup> century that granted catholic
          explorers full authority to convert, subjugate, remediate, and forcefully
          remove indigenous peoples from their land. If they refused, they were
          authorized to enslave and kill them as a way to save their souls (Miller et al,
          2010). It was the belief that those who embraced Christianity were more human
          or superior beings than those who didn’t, and thus incapable of having their
          own legal, economic or political institutions to govern themselves. In short
          indigenous peoples were lesser humans, and therefore had inferior
          relationships/rights to land. This belief provided a foundation in which
          imperial laws were established, rationalizing and legitimizing and imperial
          assumption of power over indigenous lands and resources. Indigenous (as well as
          other systems of knowledge) were dismissed. Instead, western systems of
          knowledge were positioned as being superior and trumping all others (Smith,
          2012). </p>
          <p>Conceptualization of space is only one tool that was used to
          create three basic entities on paper to help shape and redefine the indigenous
          perspective of space: The line, centre and the outside. The line was used to
          create boundaries, map territories, to survey land and create properties, and
          to mark the limit of colonial powers. The centre was always focused on the
          colonial power, with everything else being oriented in relation to it. Everything
          outside the limits of power was considered irrelevant or non-existent (Smith,
          2012).</p>
          <p>The concept of mapping has had a tremendous impact upon
          indigenous peoples for centuries. Since it was first developed, the indigenous ways
          of orienting themselves on their lands were redefined. As soon as lines were
          drawn on maps by European hands, indigenous place names, which are intricately
          connected with indigenous history, stories, and teachings, were replaced with
          English names, erasing indigenous presence from the lands. Traditional homelands
          were divided and classified into different geographic features, properties and
          imperial nations states, dividing and separating indigenous families. Languages
          and cultural teachings were lost as children were forced to attend residential
          schools and learn western ways of knowing. </p>

          <h3>References: </h3>
          <p>King, Thomas (2012) <u>The Inconvenient Indian: A curious
          Account of Native People in North America. </u>Toronto: Random House
          Publishing.</p>
          <p>Miller, Robert J., Jacinta Ruru, Larissa Behrendt, and
          Tracey Lindberg (2010). <u>Discovering Indigenous Lands: The Doctrine of
              Discovery in the English Colonies.</u> Oxford:
          University of Oxford Press. Ch. 4.</p>
          <p>Smith, Linda Tuhiwai (2012). <u>Decolonizing Indigenous
          Methodologies: Research and Indigenous Peoples. </u>London: Zed Books. </p>
          <a class="anchor" name="resources-guide"></a>
          <h2>Further reading</h2>
          <ul>
              <li><a href="http://www.ubcic.bc.ca/Resources/#axzz3nU4ZoDbl">UBC Educator readings</a></li>
              <li><a href="http://www.ubcic.bc.ca/Resources/Educators/#axzz3nU4ZoDbl">UBC Educator Resources</a></li>
              <li><a href="http://inside.tru.ca/wp-content/uploads/2011/02/ALBAA_handbook.pdf">TRU Handbook for Educators of Indigenous Students</a></li>
              <li><a href="http://www.fnesc.ca/learningfirstpeoples/indian-residential-schools-and-reconciliation/">FNESC, Residential Schools and Reconciliation</a></li>
          </ul>
      </div>
    )
  }
}

export default TeacherGuide;
