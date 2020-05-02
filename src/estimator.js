var LinearSVC = function(coefficients, intercepts) {

    this.coefficients = coefficients;
    this.intercepts = intercepts;

    this.predict = function(features) {
        var prob = 0.;
        for (var i = 0, il = this.coefficients.length; i < il; i++) {
            prob += this.coefficients[i] * features[i];
        }
        if (prob + this.intercepts > 0) {
            return 1;
        }
        return 0;
    };
};

export function estimator(features) {

    // Parameters:
    var coefficients = [0.0011534531835283735, 0.013952521139691297, -0.003235879191675021, 0.12197722275027031, 0.01706153973874266, 0.13274784697805558, -0.08969752451052326, 0.051176139546832686, 0.12667972478084377, 0.07478598166149775, -0.07258117695919153, -0.023995363267707293, -0.08342976475345901, -0.045358342221275896, 0.09574448737996731, 0.09498758514113187, 0.2559995187350549, 0.16040282919452492, 0.1371337882458397, 0.028550920761321846, 0.1839002709278157, 0.17723337646916887, 0.08868875826064955, 0.20095006874686144, 0.31378921272707033, 0.5695181797748444];
    var intercepts = -0.5359002025042949;

    // Prediction:
    var clf = new LinearSVC(coefficients, intercepts);
    return clf.predict(features);
}
