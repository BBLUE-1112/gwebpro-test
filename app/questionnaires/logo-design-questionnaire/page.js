import CheckScreenWidth from "@/app/components/CheckScreenWidth";
import NavLink from "@/app/components/NavLink";
import Link from "next/link";

export default function page() {
  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1>Logo Design Questionnaire</h1>
                </div>
                <CheckScreenWidth setWidth={991}>
                  <div className="video-container">
                    <video
                      src="/images/services-banner.mp4"
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </CheckScreenWidth>
                <div className="scroll"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="breadcrumb">
        <Link href="/">Home</Link>/
        <Link href="/questionnaires">Questionnaires</Link>/
        <NavLink href="/questionnaires/logo-design-questionnaire">
          Logo Design Questionnaire
        </NavLink>
      </div>
      <section className="section-contact-form pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contact-form form-questionnaires">
                <form>
                  <div className="row">
                    {/* <div className="col-12">
                      <p>
                        Please fill out the information below to ensure your
                        business listings online are consistent. This
                        information will help us to ensure every listing we
                        create is correct with no discrepancies.
                      </p>
                    </div> */}
                    <div className="col-12">
                      <label htmlFor="">
                        Please write out the logo name exactly as you’d like for
                        it to appear in the design (e.g., Allen & Goel Marketing
                        Company; Allen & Goel Marketing; or just Allen & Goel).
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have a short tag line you will sometimes use,
                        when appropriate, with your logo? If so, we will take
                        this into consideration when designing your logo, but
                        your logo must be able to stand on its own without the
                        tag line as well. (e.g., Allen & Goel Marketing Company
                        &quot;Your Marketing, Sales and Design Partner&quot;)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Are there any well known logos that you particularly
                        like? What do you like about them and what aspects, if
                        any, would you like to emulate?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please provide some adjectives that describe what you
                        hope to communicate with your logo. (e.g. strong,
                        exciting, warm, welcoming, inventive, humorous,
                        feminine, serene, athletic, etc.) Be sure to take a look
                        at the logo examples we provide at the end of this
                        questionnaire.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What sort of style do you envision? What do you want
                        your new logo to communicate about your company or
                        products? (e.g. modern and clean, old world, cutting
                        edge, vintage, sporty, futuristic, etc.) Be sure to take
                        a look at the logo examples we provide at the end of
                        this questionnaire.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        How would you describe your company/business to someone
                        who has no knowledge of your existence?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Describe your target market, gender, age, geography.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Describe your direct competition; provide addresses to
                        their websites if available.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any particular point of emphasis you want to
                        see in the design?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any preconceived ideas about the design of
                        your logo? Are there any elements that you would like to
                        see included in your logo design? What elements from
                        your old identity do you like or dislike?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any preconceived ideas about the design of
                        your logo? Are there any elements that you would like to
                        see included in your logo design? What elements from
                        your old identity do you like or dislike?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any particular images or symbols you
                        associate with your product or company? (e.g. favorite
                        animal or object, like a lion, ship, mountain or tree.)
                      </label>
                      <input type="file" name="" id="" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What are your color preferences? How many colors would
                        you like used in your logo? Are there any colors that
                        you DO NOT want to use? List your color preference if
                        you have any.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Will the logo be used in print, online, signs or other
                        materials? What are the plans for logo usage?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you want your logo to include text only, text and
                        graphic/icon, or graphic/icon only? If you would like to
                        use an icon, do you have any specific themes for the
                        icon that you would like us to consider?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any ideas for the style of text (font) in
                        your logo? (e.g. script, bold, light, hand­drawn, custom
                        lettering, elegant, etc.)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>

                    <div className="col-12">
                      <label htmlFor="">
                        Would you like any addition design services to be
                        packaged with your new logo? (e.g. website, business
                        cards, envelopes, letterheads, promotional products,
                        etc.)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>

                    <div className="col-12">
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
