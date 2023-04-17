import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"

const Availability = () => {
  return (
    <Layout>
      <main>
        <div className="calendar-container">
          <iframe
            title="calendar"
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23A79B8E&ctz=America%2FVancouver&showTitle=0&showNav=1&showPrint=0&showTabs=0&showTz=0&showCalendars=0&showDate=1&src=MmswNWtnY3Z2NWk5YWphaGZsZGlrb2o5aWQ3YmplOHNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23C0CA33"
            style={null}
            width="900"
            height="800"
            frameborder="0"
            // scrolling="no"
          ></iframe>
        </div>
      </main>
    </Layout>
  )
}

export default Availability

export const Head = () => <Seo />
