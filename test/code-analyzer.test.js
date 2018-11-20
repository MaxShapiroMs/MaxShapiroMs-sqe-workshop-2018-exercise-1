import assert from 'assert';
import {parseCode} from '../src/js/code-analyzer';

describe('The javascript parser', () => {
    it('is parsing an empty function correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('')),
            '[]'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a simple variable declaration correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('let a = 1;')),
            '[{"Line":1,"Type":"VariableDeclaration","Name":"a","Condition":"","Value":"1"}]'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a simple function correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('function binarySearch(X, V, n){return 1;}')),
            '[{"Line":1,"Type":"FunctionDeclaration","Name":"binarySearch","Condition":"","Value":""},{"Line":1,"Type":"VariableDeclaration","Name":"binarySearch","Condition":"","Value":""},{"Line":1,"Type":"VariableDeclaration","Name":"binarySearch","Condition":"","Value":""},{"Line":1,"Type":"VariableDeclaration","Name":"binarySearch","Condition":"","Value":""},{"Line":1,"Type":"ReturnStatement","Name":"","Condition":"","Value":"1"}]'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a simple for loop correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('for (let i=low;i<=high;i++) {}')),
            '[{"Line":1,"Type":"ForStatement","Name":"","Condition":"(i) <= (high)","Value":""},{"Line":1,"Type":"VariableDeclaration","Name":"i","Condition":""}]'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a simple while loop correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('while (low <= high) {}')),
            '[{"Line":1,"Type":"WhileStatement","Name":"","Condition":"(low) <= (high)","Value":""}]'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a example given correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('function binarySearch(X, V, n){let low, high, mid; low = 0; high = n - 1; while (low <= high) { mid = (low + high)/2; if (X < V[mid]) high = mid - 1;else if (X > V[mid]) low = mid + 1;else return mid;} return -1;}')),
            '[{"Line":1,"Type":"FunctionDeclaration","Name":"binarySearch","Condition":"","Value":""},{"Line":1,"Type":"VariableDeclaration","Name":"binarySearch","Condition":"","Value":""},{"Line":1,"Type":"VariableDeclaration","Name":"binarySearch","Condition":"","Value":""},{"Line":1,"Type":"VariableDeclaration","Name":"binarySearch","Condition":"","Value":""},{"Line":1,"Type":"VariableDeclaration","Name":"low","Condition":"","Value":"null"},{"Line":1,"Type":"VariableDeclaration","Name":"high","Condition":"","Value":"null"},{"Line":1,"Type":"VariableDeclaration","Name":"mid","Condition":"","Value":"null"},{"Line":1,"Type":"AssignmentExpression","Name":"low","Condition":"","Value":"0"},{"Line":1,"Type":"AssignmentExpression","Name":"high","Condition":"","Value":"(n) - (1)"},{"Line":1,"Type":"WhileStatement","Name":"","Condition":"(low) <= (high)","Value":""},{"Line":1,"Type":"AssignmentExpression","Name":"mid","Condition":"","Value":"(low) + (high) / (2)"},{"Line":1,"Type":"IfStatement","Name":"","Condition":"(X) < (V[mid])","Value":""},{"Line":1,"Type":"AssignmentExpression","Name":"high","Condition":"","Value":"(mid) - (1)"},{"Line":1,"Type":"IfStatement","Name":"","Condition":"(X) > (V[mid])","Value":""},{"Line":1,"Type":"AssignmentExpression","Name":"low","Condition":"","Value":"(mid) + (1)"},{"Line":1,"Type":"ReturnStatement","Name":"","Condition":"","Value":"mid"},{"Line":1,"Type":"ReturnStatement","Name":"","Condition":"","Value":"-1"}]'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a bit complex if correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('let a = 1; if(a == 1) {a = a + b}')),
            '[{"Line":1,"Type":"VariableDeclaration","Name":"a","Condition":"","Value":"1"},{"Line":1,"Type":"IfStatement","Name":"","Condition":"(a) == (1)","Value":""},{"Line":1,"Type":"AssignmentExpression","Name":"a","Condition":"","Value":"(a) + (b)"}]'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a simple binaryExpression correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('let a = 1; a = (1+1)+2;')),
            '[{"Line":1,"Type":"VariableDeclaration","Name":"a","Condition":"","Value":"1"},{"Line":1,"Type":"AssignmentExpression","Name":"a","Condition":"","Value":"(1) + (1) + (2)"}]'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a if without else correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('if (X < V[mid]){}')),
            '[{"Line":1,"Type":"IfStatement","Name":"","Condition":"(X) < (V[mid])","Value":""}]'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a binary expression of 2 member expressions in it correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('let a = 1; a = M[1]+M[2]')),
            '[{"Line":1,"Type":"VariableDeclaration","Name":"a","Condition":"","Value":"1"},{"Line":1,"Type":"AssignmentExpression","Name":"a","Condition":"","Value":"(M[1]) + (M[2])"}]'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a binary expression that has a member expression in it correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('let a = 1; a = (1+1)+M[2];')),
            '[{"Line":1,"Type":"VariableDeclaration","Name":"a","Condition":"","Value":"1"},{"Line":1,"Type":"AssignmentExpression","Name":"a","Condition":"","Value":"(1) + (1) + (M[2])"}]'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a complex if correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('let a = 1; if(a == 1) {a = a + b} else {a = a - b}')),
            '[{"Line":1,"Type":"VariableDeclaration","Name":"a","Condition":"","Value":"1"},{"Line":1,"Type":"IfStatement","Name":"","Condition":"(a) == (1)","Value":""},{"Line":1,"Type":"AssignmentExpression","Name":"a","Condition":"","Value":"(a) + (b)"},{"Line":1,"Type":"AssignmentExpression","Name":"a","Condition":"","Value":"(a) - (b)"}]'
        );
    });
});
