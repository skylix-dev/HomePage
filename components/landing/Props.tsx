export default interface Props {
    /**
     * Landing page sections
     */
    sections: {
        /**
         * Section title
         */
        title: string;

        /**
         * Section body content
         */
        body: string[]
    }[];
}