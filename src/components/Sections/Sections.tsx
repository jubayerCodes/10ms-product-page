
import { Section } from '@/types/types';
import React from 'react';
import Instructors from '../Instructors/Instructors';
import Features from '../Features/Features';
import Pointers from '../Pointers/Pointers';
import FeatureExplanations from '../FeatureExplanations/FeatureExplanations';

const Sections = ({ sections }: { sections: Section[] }) => {

    const customSections = sections?.filter((section: Section) => section.type !== 'bundle_items' && section.type !== 'offers' && section.type !== 'certificate' && section.type !== 'bundle_certificate')
    return (
        <>
            {
                customSections?.map((section: Section) => {

                    switch (section?.type) {
                        case "instructors":
                            return <Instructors section={section} instructors={section.values} key={section?.order_idx} />;
                        case "features":
                            return <Features features={section?.values} section={section} key={section?.order_idx} />;
                        case "pointers":
                            return <Pointers pointers={section?.values} section={section} key={section?.order_idx} />;
                        case "feature_explanations":
                            return <FeatureExplanations features={section?.values} section={section} key={section?.order_idx} />;
                    }

                })
            }
        </>
    );
};

export default Sections;