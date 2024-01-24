import { Col, Row } from 'antd';
import privacyStyles from './privacy.module.css';
import Faqs from './Faqs';
import { useState } from 'react';
import Button from 'components/Button/Button';

export default function Privacy() {
  const [showMorePolicies, setShowMorePolicies] = useState(false);

  // show more policies
  const morePolicyStyles = showMorePolicies
    ? privacyStyles.show_more_policy
    : privacyStyles.hidden;

  const toggleShowMorePolicies = () => {
    setShowMorePolicies((prev) => !prev);
  };

  // more policies icon styles

  const rotateIcon = {
    transform: 'rotate(180deg)',
  };
  return (
    <section className={privacyStyles.wrapper}>
      <div className={privacyStyles.hero}>
        <h2>Privacy policy / FAQs</h2>
      </div>
      <section className={privacyStyles.privacy_wrapper}>
        <div className={privacyStyles.page_heading_wrap}>
          <h3>Privacy Policy for Attireflow</h3>
          <p>Last updated: Monday, 11 September, 2023.</p>
        </div>

        <Row gutter={8}>
          <Col sm={24} md={19}>
            <section className={privacyStyles.privacy_first_column}>
              <article>
                <h4>introduction</h4>
                <p>
                  Welcome to ATTIREFLOW. We respect your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you use our website and
                  services. By accessing or using our website, you consent to
                  the practices described in this Privacy Policy. Please take a
                  moment to read this policy carefully.
                </p>
              </article>
              <article>
                <h4>information we collect</h4>
                <ol className={privacyStyles.ordered_list}>
                  <li>
                    Personal Information: When you visit our website, make a
                    purchase, or interact with us, we may collect personal
                    information, such as your name, email address, shipping
                    address, phone number, and payment information.
                  </li>
                  <li>
                    Usage Information: We may also collect non-personal
                    information, such as your IP address, browser type, and
                    operating system, as well as information about your browsing
                    activities on our website.
                  </li>
                </ol>
              </article>
              <article>
                <h4>How We Use Your Information</h4>

                <p>
                  We may use your personal information for the following
                  purposes:
                </p>
                <ol className={privacyStyles.ordered_list}>
                  <li>
                    To process and fulfill orders you place on our website.
                  </li>
                  <li>
                    To communicate with you about your orders and provide
                    customer support.
                  </li>
                  <li>
                    To send you promotional emails, newsletters, and updates
                    with your consent.
                  </li>
                  <li>
                    To improve our website&#39;s functionality, performance, and
                    user experience.
                  </li>
                  <li>To protect the security and integrity of our website.</li>
                  <li>
                    To comply with legal obligations and resolve disputes.
                  </li>
                </ol>
              </article>
              <div className={morePolicyStyles}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum sit in illo, mollitia nulla porro ullam doloremque
                  illum repudiandae veniam impedit, nostrum recusandae,
                  accusamus eos quisquam ipsa quia repellendus numquam dicta
                  iusto deserunt. Maiores dolore, possimus nesciunt corrupti
                  maxime incidunt, quam rem est ea eius quisquam excepturi
                  suscipit obcaecati labore.
                </p>
              </div>
              <Button
                onClick={toggleShowMorePolicies}
                className={privacyStyles.more_policy_btn}
              >
                <box-icon
                  name='chevron-down'
                  color='#085cb2'
                  size='md'
                  style={showMorePolicies ? rotateIcon : null}
                ></box-icon>
              </Button>
            </section>
          </Col>
          <Col className={privacyStyles.privacy_second_column} span={5}>
            <ul>
              <li>privacy page </li>
              <li>FAQs</li>
            </ul>
          </Col>
        </Row>
      </section>
      <hr className={privacyStyles.divider} />
      <Faqs styles={privacyStyles} />
    </section>
  );
}
